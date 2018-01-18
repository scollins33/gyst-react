import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Time from './pages/Time';
import Money from './pages/Money';
import Social from './pages/Social';

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
                </div>
            </Router>
        );
    }
}
export default App;
