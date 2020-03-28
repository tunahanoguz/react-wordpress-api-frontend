import React, {useState, useEffect} from 'react';
import axios from "axios";
import {
    Container,
    Nav,
    Navbar
} from "react-bootstrap";
import {API_URL} from "../constants";

function NavBar(){
    const [pages, setPages] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/pages`)
            .then(response => {
                const data = response.data;
                setPages(data);
            });
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="mb-5 shadow-lg"
        >
            <Container>
                <Navbar.Brand href="/">WordPress API Frontend</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {pages.map(page => (
                            page.status === 'publish' &&
                            <Nav.Link
                                key={page.id}
                                href={`/page/${page.slug}`}
                            >
                                {page.title.rendered}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
