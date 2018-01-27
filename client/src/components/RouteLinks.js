import React from 'react';
import { Link } from "react-router-dom";

const RouteLinks = props =>(
    <div className={"d-flex flex-row align-content-start"}>
        <p className={"mx-1"}><Link to={"/contact"}>contact us</Link></p>
        <p className={"mx-1"}><Link to={'/time'}>time</Link></p>
        <p className={"mx-1"}><Link to={'/money'}>money</Link></p>
        <p className={"mx-1"}><Link to={'/social'}>social</Link></p>

    </div>
);

export default RouteLinks;