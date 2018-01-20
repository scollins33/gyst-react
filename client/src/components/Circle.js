import React from 'react';

const Circle = props =>{
    const circleStyle = {

        borderRadius: "50%",
        height: "200px",
        maxWidth: "200px",
        backgroundColor: props.color,
        margin: "auto",
        color: "#707070",
        fontSize: "4rem"
    };

    return(
        <div
            style={circleStyle}
             className={"d-flex align-items-center justify-content-center"}
        >
            {props.circleText}
        </div>
    )
};

export default Circle;