import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Button from "material-ui/Button";


class LoginSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: props.loggedin,
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
        console.log(event.target);
        const property = event.target.name;
        const val = event.target.value;

        this.setState({
            [property]: val,
        });
    };

    submit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        console.log(data);

        fetch("/users/register",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(res => {
                console.log(res);
                this.toggleReg();
            });
    };

    render() {

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
                                <input type="username" name={'username'}
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
                            <Button raised type="submit" value={'Submit'} onClick={(event) => {this.submit(event)}}>
                            Submit
                            </Button>
                        </div>
                    </form>
                </Dialog>

                <Button onClick={this.toggleLog}>LOGIN</Button>
                <Dialog open={this.state.log}>
                    <form>
                        <div className="login-group">
                            <label>Username
                                <input type="text" name={'Username'}/>
                            </label>
                            <label>Password
                                <input type="password" name={'Password'}/>
                            </label>
                            <Button raised type="submit" value={'Submit'}>
                                Submit
                            </Button>
                            <Button raised onClick={this.toggleLog}>X</Button>
                        </div>
                    </form>
                </Dialog>
            </div>
        );
    }

};


    // else
    //
    // {
    //     return(
    //         <div>
    //         <a href={"#"} className={"mx-1"}><p>logout</p></a>
    //     </div>
    //     );
    // }



export default LoginSpace;