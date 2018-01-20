import React from 'react';


const Event = props =>(
    <div style={{
        backgroundColor: "#fff",
        boxShadow: "0px 3px 5px rgba(100, 100, 100, 0.49)"}}
         className={"p-2 mx-1 mb-1"}>
        <label><strong>Event:</strong></label>
        <p>{props.name}</p>
        <label><strong>Time:</strong></label>
        <p>{props.startTime} to {props.endTime}</p>
        <label><strong>Notes:</strong></label>
        <p>{props.notes}</p>
    </div>
);

export default Event;