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
    const [category, setCategory] = useState({});
    const {id, name, description} = category;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/categories?slug=${slug}`)
            .then(response => {
                const data = response.data[0];
                setCategory(data);
            });
    }, []);

    useEffect(() => {
        if (Object.keys(category).length !== 0){
            axios.get(`${API_URL}/posts?categories=${id}`)
                .then(response => {
                    const data = response.data;
                    setPosts(data);
                });
        }
    }, [category]);

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

    if (Object.keys(category).length !== 0){
        return (
            <Fragment>
                <Helmet>
                    <title>{name}</title>
                </Helmet>

                <NavBar title="Wordpress API Frontend"/>

                <Container>
                    <Row className="mb-4">
                        <Col lg={12}>
                            <Title title={name}/>
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
