import React from 'react';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';


handleToggle = () => this.state.open ? this.setState({ open: false }) : this.setState({ open: true });

const LoginSpace = props => {

    if(props.loggedin === false){
        return(
            <div className={"d-flex flex-row"}>
                <Dialog open={this.state.open}>
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



export default LoginSpace