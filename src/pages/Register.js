import React, {Component, Fragment} from 'react';
import {Helmet} from "react-helmet";

class Register extends Component {
    head(){
        return (
            <Helmet>
                <title>Register Page</title>
            </Helmet>
        );
    }

    render(){
        return (
            <Fragment>
                {this.head()}
                asd
            </Fragment>
        );
    }
}

export default Register;
