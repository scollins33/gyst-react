import React from 'react';
import Circle from "./Circle";

const ComponentColumn = props => {

    return(
        <div className={"col-4"}>
            <Circle className={"mx-auto"} color={props.circleColor} circleText={props.circleText}/>
            <div>
                <p className={"text-center"}>
                    {props.text}
                </p>
            </div>
        </div>
    )
};

export default ComponentColumn;