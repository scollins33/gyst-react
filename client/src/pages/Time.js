import React, { Component } from "react";
import DayView from "../components/time/DayView";
import Event from '../components/time/Event'
import TimeSummary from "../components/time/TimeSummary";

const workload=[
    {
        name: "work",
        startTime: "7:00am",
        endTime: "3:00pm",
        notes: "hancock claims",
        class: "work"
    },
    {
        name: "gym",
        startTime: "4:00pm",
        endTime: "5:00pm",
        notes: "leg day",
        class: "focus"
    },
    {
        name: "dinner",
        startTime: ":600pm",
        endTime: "7:30pm",
        notes: "date with julia",
        class: "play"
    },
    {
        name: "movie",
        startTime: "8:00pm",
        endTime: "10:00pm",
        notes: "Black panther at Cinema Time Theatres",
        class: "play"
    }

];

class Time extends Component {
    constructor(props){
        super(props);
        this.state={
            selected: "",
            workload: workload,

        }
    }



    render() {
        return (
            <div style={{height: "auto", backgroundColor: "#F0C39E"}}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12 col-sm-6 my-3"}>
                            {this.state.workload.map((task,index)=><Event key={index} name={task.name} startTime={task.startTime} endTime={task.endTime} notes={task.notes}/>)}
                        </div>
                        <TimeSummary/>
                        <DayView/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;