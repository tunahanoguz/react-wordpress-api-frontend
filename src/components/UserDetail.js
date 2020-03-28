import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Image,
    Jumbotron,
    Row
} from "react-bootstrap";

function UserDetail({name, description}){
    return (
        <Jumbotron>
            <Row>
                <Col lg={3}>
                    <Image
                        src="/img/avatar.jpg"
                        rounded
                        className="w-100 h-100"
                        width={50}
                        height={50}
                    />
                </Col>
                <Col lg={9}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </Col>
            </Row>
        </Jumbotron>
    );
}

UserDetail.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default UserDetail;
