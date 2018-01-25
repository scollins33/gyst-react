import React, { Component } from "react";
import DayView from "../components/time/DayView";
import Event from '../components/time/Event'
import TimeSummary from "../components/time/TimeSummary";
const moment = require('moment');

class Time extends Component {
    constructor(props){
        super(props);
        this.state={
            selected: "",
            workload: [],

        }
    }

    componentDidMount(){
fetch("/api/getEvents",{method: "GET"})
    .then(res=> res.json())
    .then(data=> this.setState({workload: data}));
    }

    render() {
        return (
            <div style={{height: "auto", backgroundColor: "#F0C39E"}}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12 col-sm-6 my-3"}>
                            {this.state.workload.map((task,index)=><Event key={index} name={task.name} startTime={moment(task.startTime).format('LT')} endTime={moment(task.endTime).format('LT')} notes={task.notes}/>)}
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