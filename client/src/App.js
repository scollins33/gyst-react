// import React, Router, and MUI
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// import pages
import Time from './pages/Time';
import Money from './pages/Money';
import Social from './pages/Social';
import Landing from "./pages/Landing";
import Header from './components/Header.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.theme = createMuiTheme();
    }

    render () {
        return (
            <Router>
                <MuiThemeProvider theme={this.theme}>
                    <Header mainpage={true} />
                    <Switch>
                        <Route exact path="/time" component={Time}/>
                        <Route exact path="/money" component={Money}/>
                        <Route exact path="/social" component={Social}/>
                        <Route exact path="/" component={Landing}/>
                    </Switch>
                </MuiThemeProvider>
            </Router>
        );
    }
}
export default App;
