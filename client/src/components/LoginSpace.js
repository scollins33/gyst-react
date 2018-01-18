import React from 'react';


const LoginSpace = props => {

    if(props.loggedin === false){
        return(
            <div className={"d-flex flex-row"}>
                <a href={"#"} className={"mx-1"}><p>sign up</p></a>
                <a href={"#"} className={"mx-1"}><p>login</p></a>
            </div>
        )
    } else{
        return(
            <div>
            <a href={"#"} className={"mx-1"}><p>logout</p></a>
        </div>
        )
    }


};

export default LoginSpace