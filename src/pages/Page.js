import React, {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {API_URL} from "../constants";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import PostDate from "../components/PostDate";
import PostCategory from "../components/PostCategory";
import PostTag from "../components/PostTag";
import {Container} from "react-bootstrap";

function Page(){
    const {slug} = useParams();
    const [page, setPage] = useState({});
    const {title, content} = page;

    useEffect(() => {
        axios.get(`${API_URL}/pages?slug=${slug}`)
            .then(response => {
                const data = response.data[0];
                setPage(data);
            });
    }, []);

    if (Object.keys(page).length !== 0){
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

                    {/*<div className="text-center mb-4">*/}
                    {/*    <PostDate date={date}/>*/}
                    {/*    <PostCategory categories={postCategories}/>*/}
                    {/*</div>*/}

                    <p dangerouslySetInnerHTML={{__html: content.rendered}}/>

                    {/*<PostTag tags={postTags}/>*/}
                </Container>
            </Fragment>
        );
    } else {
        return null;
    }
}

export default Page;
