import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Time from './pages/Time';
import Money from './pages/Money';
import Social from './pages/Social';
import Landing from "./pages/Landing";
import Header from './components/Header.js';
import './App.css';
import LoginSpace from "./components/LoginSpace";

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Header mainpage={true} login={<LoginSpace loggedin={false}/>}/>
                    <Switch>
                        <Route exact path="/time" component={Time}/>
                        <Route exact path="/money" component={Money}/>
                        <Route exact path="/social" component={Social}/>
                        <Route exact path="/" component={Landing}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
