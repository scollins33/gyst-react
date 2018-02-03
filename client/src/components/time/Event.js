import React from 'react';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const Event = props =>(
    <div style={{
        backgroundColor: "#fff",
        boxShadow: "0px 5px 5px rgba(100, 100, 100, 0.49)"}}
         className={"p-2 mx-1 mb-3"}>
        <label><strong>Event ID: {props.id}</strong></label>
        <br/>
        <label><strong>Event:</strong></label>
        <br/>
        <TextField value={props.name}/>
        <br/>
        <label><strong>Start Time:</strong></label>
        <br/>
        <TextField value={props.startTime}/>
        <br/>
        <label><strong>End Time:</strong></label>
        <br/>
        <TextField value={props.endTime}/>
        <br/>
        <label><strong>Class:</strong></label>
        <br/>
        <TextField value={props.class}/>
        <br/>
        <label><strong>Notes:</strong></label>
        <br/>
        <TextField value={props.notes}/>
        <br/>
        <div className={"d-flex justify-space-between"}>
            <Button className={"mx-1 my-1"} raised color="secondary" onClick={(e)=>props.delete(e, props.id)}>delete schedule</Button>
            <Button className={"mx-1 my-1"} raised color="primary" onClick={(e)=>props.update(e, props.id)}>update schedule</Button>
        </div>
    </div>
);

export default Event;
