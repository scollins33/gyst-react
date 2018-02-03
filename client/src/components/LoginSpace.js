import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Button from "material-ui/Button";


class LoginSpace extends Component {
    constructor(props) {
        super(props);

        // double negative to produce boolean value instead of actual value
        const logged = !!localStorage.getItem('user');

        this.state = {
            logged: logged,
            name: "",
            username: "",
            email: "",
            password: "",
            reg: false,
            log: false,
        };
    }

    toggleReg = () => this.state.reg ? this.setState({ reg: false }) : this.setState({ reg: true });
    toggleLog = () => this.state.log ? this.setState({ log: false }) : this.setState({ log: true });

    handleChange = (event) => {
        const property = event.target.name;
        const val = event.target.value;

        this.setState({
            [property]: val,
        });
    };

    register = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        console.log(data);

        fetch("/api/addUser",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.userId) {
                    localStorage.setItem("user", data.userId);
                    this.setState({ logged: true });
                    this.toggleReg();
                } else {
                    // fail to register
                }
            });
    };

    login = (event) => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(data);

        fetch("/api/login",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.userId) {
                    localStorage.setItem("user", data.userId);
                    this.setState({ logged: true });
                    this.toggleLog();
                } else {
                    // fail to login
                }
            });
    };

    logout = () => {
        localStorage.removeItem('user');
        this.setState({ logged: false });
    };



    render() {

        if (this.state.logged === false) {
            return(
                <div className={"d-flex flex-row"}>
                    <Button onClick={this.toggleReg}>REGISTER</Button>
                    <Dialog open={this.state.reg}>
                        <form>
                            <div className="register-group">

                                <label>Name
                                    <input type="text" name={'name'}
                                           value={this.state.name} onChange={this.handleChange}/>
                                </label>
                                <label>Username
                                    <input type="text" name={'username'}
                                           value={this.state.username} onChange={this.handleChange}/>
                                </label><Button raised onClick={this.toggleReg}>X</Button>
                                <label>Email
                                    <input type="email" name={'email'}
                                           value={this.state.email}  onChange={this.handleChange}/>
                                </label>
                                <label>Password
                                    <input type="password" name={'password'}
                                           value={this.state.password} onChange={this.handleChange}/>
                                </label>
                                <label>Confirm Password
                                    <input type="password" name={'ConfirmPassword'}/>
                                </label>
                                <Button raised type="submit" value={'Submit'} onClick={this.register}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Dialog>

                    <Button onClick={this.toggleLog}>LOGIN</Button>
                    <Dialog open={this.state.log} >
                        <form>
                            <div className="login-group">
                                <label>Username
                                    <input type="text" name={'username'}
                                           value={this.state.username} onChange={this.handleChange}/>
                                </label>
                                <label>Password
                                    <input type="password" name={'password'}
                                           value={this.state.password} onChange={this.handleChange}/>
                                </label>
                                <Button raised type="submit" value={'Submit'} onClick={this.login}>
                                    Submit
                                </Button>
                                <Button raised onClick={this.toggleLog}>X</Button>
                            </div>
                        </form>
                    </Dialog>
                </div>
            );
        } else {
            return (
                <div className={"d-flex flex-row"}>
                    <Button onClick={this.logout}>Logout</Button>
                </div>
            )
        }
    }
}

export default LoginSpace;