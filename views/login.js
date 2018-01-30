import React from 'react';

class loginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
    }

    render() {
        return (
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

        );
    }
}

export default loginForm;



