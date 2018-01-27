import React from 'react';

class loginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};

    }

    render()
    return (
<form method='post'>
<div className="form-group">
<label>Username</label>
<input type="text" className="form-control"
placeholder="Username">
</div>
<div className="form-group">
<label>Password</label>
<input type="password" className="form-control"
placeholder="Password">
</div>
<button type="submit" className="btn btn-default">Submit</button>
</form>
)
}
}



export default loginForm;