import React from 'react';
import { Link } from "react-router-dom";

const RouteLinks = () =>(
    <div className={"d-flex flex-row align-items-center"}>
        <p className={"mx-1"}><Link to={'/time'}>time</Link></p>
        <p className={"mx-1"}><Link to={'/money'}>money</Link></p>
        <p className={"mx-1"}><Link to={'/social'}>social</Link></p>

    </div>
);

export default RouteLinks;