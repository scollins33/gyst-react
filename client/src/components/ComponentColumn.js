import React from 'react';
import Circle from "./Circle";

const ComponentColumn = props => {

    return(
        <div className={"col-4"}>
            <a href={props.link}><Circle className={"mx-auto"} color={props.circleColor} circleText={props.circleText}/></a>
            <div>
                <p className={"text-center"}>
                    {props.text}
                </p>
            </div>
        </div>
    )
};

export default ComponentColumn;