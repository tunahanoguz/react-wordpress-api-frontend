import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Page from "./pages/Page";
import Tag from "./pages/Tag";

class App extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" render={props => (
                    <Home {...props} />
                )}/>
                <Route path="/post/:slug" children={<Post/>}/>
                <Route path="/category/:slug" children={<Category/>}/>
                <Route path="/page/:slug" children={<Page/>}/>
                <Route path="/tag/:slug" children={<Tag/>}/>
            </Switch>
        );
    }
}

export default App;
