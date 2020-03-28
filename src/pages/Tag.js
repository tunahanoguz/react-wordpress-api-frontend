import React, {Fragment, useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {API_URL} from "../constants";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import PostItem from "../components/PostItem";
import Title from "../components/Title";

function Category(){
    const {slug} = useParams();
    const [tag, setTag] = useState({});
    const {id, name, description} = tag;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/tags?slug=${slug}`)
            .then(response => {
                const data = response.data[0];
                setTag(data);
            });
    }, []);

    useEffect(() => {
        if (Object.keys(tag).length !== 0){
            axios.get(`${API_URL}/posts?tags=${id}`)
                .then(response => {
                    const data = response.data;
                    setPosts(data);
                });
        }
    }, [tag]);

    function renderPosts() {
        if (posts.length !== 0){
            return posts.map(post => {
                return (
                    <PostItem
                        key={post.id}
                        post={post}
                    />
                );
            });
        }
    }

    if (Object.keys(tag).length !== 0){
        return (
            <Fragment>
                <Helmet>
                    <title>{name}</title>
                </Helmet>

                <NavBar title="Wordpress API Frontend"/>

                <Container>
                    <Row className="mb-4">
                        <Col lg={12}>
                            <Title title={`Tag: ${name}`}/>
                            <p>{description}</p>
                        </Col>
                    </Row>

                    <Row>
                        {renderPosts()}
                    </Row>
                </Container>
            </Fragment>
        );
    } else {
        return null;
    }
}

export default Category;
