import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import Home from "./pages/Home";
import Register from "./pages/Register";

class App extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" render={props => (
                    <Home {...props} />
                )}/>
                <Route path="/register" render={props => (
                    <Register {...props} />
                )} />
            </Switch>
        );
    }
}

export default App;
