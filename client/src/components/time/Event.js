import React from 'react';
import TextField from 'material-ui/TextField'


const Event = props =>(
    <div style={{
        backgroundColor: "#fff",
        boxShadow: "0px 5px 5px rgba(100, 100, 100, 0.49)"}}
         className={"p-2 mx-1 mb-3"}>
        <label><strong>Event:</strong></label>
        <TextField value={props.name}/>
        <label><strong>Start Time:</strong></label>
        <TextField value={props.startTime}/>
        <label><strong>End Time:</strong></label>
        <TextField value={props.endTime}/>
        <label><strong>Notes:</strong></label>
        <TextField value={props.notes}/>
    </div>
);

export default Event;
