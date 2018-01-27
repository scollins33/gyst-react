import React, { Component } from 'react';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Button from "material-ui/Button";


class LoginSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: props.loggedin,
            reg: false,
            log: false,
        };
    }

    toggleReg = () => this.state.reg ? this.setState({ reg: false }) : this.setState({ reg: true });
    toggleLog = () => this.state.log ? this.setState({ log: false }) : this.setState({ log: true });

    render() {
        return(
            <div className={"d-flex flex-row"}>
                <Button onClick={this.toggleReg}>REGISTER</Button>
                <Dialog open={this.state.reg}>
                    <form>
                        <div className="register-group">
                            <label>Name
                                <input type="text" name={'Name'}/>
                            </label>
                            <label>Username
                                <input type="test" name={'Username'}/>
                            </label>
                            <label>Email
                                <input type="email" name={'Email'}/>
                            </label>
                            <label>Password
                                <input type="password" name={'Password'}/>
                            </label>
                            <label>Confirm Password
                                <input type="password" name={'ConfirmPassword'}/>
                            </label>
                            <input type="submit" value={'Submit'}/>
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
                            <input type="submit" value={'Submit'}/>
                        </div>
                    </form>
                </Dialog>
            </div>
        );
    }

}


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