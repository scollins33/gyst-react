import React from 'react';
import RouteLinks from "./RouteLinks";
import { Link } from "react-router-dom";


const Header = props => {
    let headerLogo = <Link to={'/'}><h1 style={{fontFamily: "\"Arial Black\", Gadget, sans-serif"}}>GYST</h1></Link>;
    let headerStyle = {backgroundColor: "#fff", boxShadow: "0px 3px 5px rgba(100, 100, 100, 0.49)"};
    if (props.mainPage === true) {
        headerLogo = null;
        headerStyle = null;
    }
        return (
            <div
                className={"container-fluid sticky-top"}
                style={headerStyle}>
                <div className={"row"}>
                    <div className={"col-4 d-flex justify-content-start my-auto"}><RouteLinks/></div>
                    <div className={"col-4 d-flex justify-content-center my-auto"}>{headerLogo}</div>
                    <div className={"col-4 d-flex justify-content-end my-auto"}>{props.login}</div>
                </div>
            </div>
        )
    };

export default Header;