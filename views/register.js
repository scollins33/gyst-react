import React from 'react';

class registerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
    }

    render() {
        return (
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
                    <input type="password" name=""{'Password'}/>
                </label>
                <label>Confirm Password
                    <input type="password" name={'ConfirmPassword'}/>
                </label>
                <input type="submit" value={'Submit'}/>
            </div>
        </form>
    );

    }

    }



    export default registerForm;