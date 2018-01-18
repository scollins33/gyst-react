import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Time from './pages/Time';
import Money from './pages/Money';
import Social from './pages/Social';
import Header from './components/Header.js'
import './App.css';
import LoginSpace from "./components/LoginSpace";
import Title from "./components/Title";
import ComponentColumn from './components/ComponentColumn';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <header>
                        <h1>GYST HOME PAGE</h1>
                        <ul>
                            <li><Link to={'/time'}>Time</Link></li>
                            <li><Link to={'/money'}>Money</Link></li>
                            <li><Link to={'/social'}>Social</Link></li>
                        </ul>
                    </header>

                    <Switch>
                        <Route exact path="/time" component={Time}/>
                        <Route exact path="/money" component={Money}/>
                        <Route exact path="/social" component={Social}/>
                    </Switch>
                    <Header mainpage={true} login={<LoginSpace loggedin={false}/>}/>
                    <Title/>
                    <div className={"container"}>
                        <div className={"row"}>
                            <ComponentColumn circleColor={"#F0C39E"} circleText={"time"} text={'manage time'}/>
                            <ComponentColumn circleColor={"#C8E1B5"} circleText={"$"} text={"manage money"}/>
                            <ComponentColumn circleColor={"#AFDBC8"} circleText={"social"} text={"manage relationships"}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
