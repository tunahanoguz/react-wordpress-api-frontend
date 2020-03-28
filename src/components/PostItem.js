import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import {API_URL} from "../constants";

function PostItem({post}){
    const {title, slug, featured_media} = post;
    const [image, setImage] = useState('');

    useEffect(() => {
        if (featured_media !== 0){
            axios.get(`${API_URL}/media/${featured_media}`)
                .then(response => {
                    const featuredMedia = response.data;
                    setImage(featuredMedia.guid.rendered);
                });
        }
    }, [featured_media]);

    if (Object.keys(post).length !== 0){
        return (
            <Col lg={6} className="mb-4">
                <Card className="rounded h-100">
                    <Row className="h-100">
                        <Col lg={4}>
                            {image ? (
                                <Card.Img
                                    variant="top"
                                    src={image}
                                    alt={title.rendered}
                                    className="h-100"
                                />
                            ) : (
                                <div className="bg-light w-100 h-100"/>
                            )}
                        </Col>

                        <Col lg={8} className="px-0">
                            <Card.Body>
                                <Link
                                    to={`/post/${slug}`}
                                    className="text-dark"
                                >
                                    <Card.Title>{title.rendered}</Card.Title>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
};

export default PostItem;
