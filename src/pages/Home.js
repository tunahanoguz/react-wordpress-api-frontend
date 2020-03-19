import React, {Component, Fragment} from 'react';
import {Helmet} from "react-helmet";
import Title from "../components/Title";
import Button from "../components/Button";

class Home extends Component {
    head(){
        return (
            <Helmet>
                <title>Wordpress API Frontend</title>
            </Helmet>
        );
    }

    render(){
        return (
            <Fragment>
                {this.head()}
                <Title title="Hello World!"/>
                <Button text="Say something" action={this.saySomething}/>
            </Fragment>
        );
    }
}

export default Home;
