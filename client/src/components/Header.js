import React from 'react';

const Header = props => {
    let headerLogo = <h1 style={{fontFamily: "\"Arial Black\", Gadget, sans-serif"}}>GYST</h1>;
    let dropShadow = {boxShadow: "0px 3px 5px rgba(100, 100, 100, 0.49)"};
    if (props.mainPage === true) {
        headerLogo = null;
        dropShadow = null;
    }
        return (
            <div
                className={"container-fluid"}
                style={dropShadow}>
                <div className={"d-flex justify-content-between align-items-center mx-3"}>
                    <a href="#"><p>contact us</p></a>
                    {headerLogo}
                    {props.login}
                </div>
            </div>
        )
    }
;

export default Header;