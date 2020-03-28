import React, {Component, Fragment} from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';
import {Container, Row} from "react-bootstrap";
import Pagination from "../components/Pagination";
import NavBar from "../components/NavBar";
import PostItem from "../components/PostItem";
import {API_URL} from "../constants";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            totalPageNumber: 1,
            currentPage: 1,
        };

        this.setPageNumber = this.setPageNumber.bind(this);
    }

    getPosts(){
        axios.get(`${API_URL}/posts?per_page=5&page=${this.state.currentPage}`)
            .then(response => {
                const totalPageNumber = response.headers['x-wp-totalpages'];
                this.setState({
                    posts: response.data,
                    totalPageNumber,
                });
            });
    }

    getFeaturedMedia(){
        axios.get(`${API_URL}/media?per_page=5&page=${this.state.currentPage}`)
            .then(response => {
                const totalPageNumber = response.headers['x-wp-totalpages'];
                this.setState({
                    posts: response.data,
                    totalPageNumber,
                });
            });
    }

    componentDidMount() {
        this.getPosts();
    }

    head() {
        return (
            <Helmet>
                <title>Wordpress API Frontend</title>
            </Helmet>
        );
    }

    setPageNumber(value){
        this.setState({currentPage: value}, () => this.getPosts());
    }

    renderPosts() {
        const posts = this.state.posts;
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
    };

    render() {
        const {currentPage, totalPageNumber} = this.state;
        return (
            <Fragment>
                {this.head()}

                <NavBar title="Wordpress API Frontend"/>

                <Container className="mb-5">
                    <Row className="mb-4">
                        {this.renderPosts()}
                    </Row>

                    <Row className="d-flex flex-row justify-content-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPageNumber={Number(totalPageNumber)}
                            setPageNumber={this.setPageNumber}
                        />
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;
