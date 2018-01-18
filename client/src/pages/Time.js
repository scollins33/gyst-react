import React, { Component } from "react";
import DayView from "../components/time/DayView";
import TimeSummary from "../components/time/TimeSummary";


class Time extends Component {

    render() {
        return (
            <div style={{height: "auto", backgroundColor: "#F0C39E"}}>
                <div className={"container"}>
                    <div className={"row"}>
                        <DayView/>
                        <TimeSummary/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;