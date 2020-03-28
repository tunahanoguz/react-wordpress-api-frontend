import React, {Fragment, useState, useEffect} from 'react';
import {useParams} from "react-router";
import Helmet from 'react-helmet';
import axios from "axios";
import {API_URL} from "../constants";
import Title from "../components/Title";
import NavBar from "../components/NavBar";

import {Badge, Container} from "react-bootstrap";
import UserDetail from "../components/UserDetail";
import PostCategory from "../components/PostCategory";
import PostDate from "../components/PostDate";
import PostTag from "../components/PostTag";

function Post(){
    const [post, setPost] = useState({});
    const [postCategories, setPostCategories] = useState([]);
    const [postAuthor, setPostAuthor] = useState([]);
    const [postTags, setPostTags] = useState([]);
    const {slug} = useParams();
    const {
        title,
        content,
        date,
        categories,
        featured_media,
        author,
        tags,
    } = post;

    useEffect(() => {
        axios.get(`${API_URL}/posts?slug=${slug}`)
            .then(response => {
                const data = response.data[0];
                setPost(data);
            });
    }, []);

    useEffect(() => {
        if (Object.keys(post).length !== 0 && categories.length !== 0){
            categories.map(category => {
                axios.get(`${API_URL}/categories/${category}`)
                    .then(response => {
                        const data = response.data;
                        setPostCategories(value => [...value, data]);
                    });
            });
        }
    }, [categories]);

    useEffect(() => {
        if (Object.keys(post).length !== 0){
            axios.get(`${API_URL}/users/${author}`)
                .then(response => {
                    const data = response.data;
                    setPostAuthor(data);
                });
        }
    }, [author]);

    useEffect(() => {
        if (Object.keys(post).length !== 0){
            tags.map(tag => {
                axios.get(`${API_URL}/tags/${tag}`)
                    .then(response => {
                        const data = response.data;
                        setPostTags(value => [...value, data]);
                    });
            });
        }
    }, [tags]);

    function renderAuthor(){
        const {name, description} = postAuthor;
        return (
            <Container className="mt-4">
                <UserDetail
                    name={name !== undefined ? name : ""}
                    description={description !== undefined ? description : ""}
                />
            </Container>
        );
    }

    function renderPost(){
        if (Object.keys(post).length !== 0){
            return (
                <Fragment>
                    <Helmet>
                        <title>{title.rendered}</title>
                    </Helmet>

                    <NavBar title="Wordpress API Frontend"/>

                    <Container>
                        <Title
                            title={title.rendered}
                            large
                            center
                        />

                        <div className="text-center mb-4">
                            <PostDate date={date}/>
                            <PostCategory categories={postCategories}/>
                        </div>

                        <p dangerouslySetInnerHTML={{__html: content.rendered}}/>

                        <PostTag tags={postTags}/>
                    </Container>
                </Fragment>
            );
        }
    }

    return (
        <Fragment>
            {renderPost()}
            {renderAuthor()}
        </Fragment>
    );
}

export default Post;
