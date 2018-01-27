import React, { Component } from "react";
import DayView from "../components/time/DayView";
import Event from '../components/time/Event'
import TimeSummary from "../components/time/TimeSummary";
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EventModal from "../components/time/EventModal";
const moment = require('moment');

class Time extends Component {
    constructor(props){
        super(props);
        this.state={
            workload: [],
            view: "daily",
            modalStatus: false,
            newName: null,
            newStart: null,
            newEnd: null,
            newClass: null,
            newNotes: null,
            newRepeat: null
        }
    }

    componentDidMount(){
        fetch("/api/getEvents",{method: "GET"})
            .then(res=> res.json())
            .then(data=> this.setState({workload: data}))
            .catch(err=>console.log(err));
    }

    handleAddEvent=(e)=>{
        if (!this.state.modalStatus){
            return
        }
        e.preventDefault();
        const newEvent = {
            name: this.state.newName,
            startTime: this.state.newStart,
            endTime: this.state.newEnd,
            class: this.state.newClass,
            notes: this.state.newNotes,
            repeat: this.state.newRepeat,
        };

        console.log(newEvent);

        const myRequest = new Request("/api/addEvent", {
                method: "POST",
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent)
        });

        fetch(myRequest)
            .then(res=> console.log(res))
            .catch(err=> console.log(err));
        console.log("event submitted")
    };

    handleInputChange=(e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        console.log(this.state)
    };

    onAddClick=(e)=>{
        e.preventDefault();
        this.setState({modalStatus: !this.state.modalStatus})
    };

    render() {
        return (
            <div style={{height: "auto", backgroundColor: "#F0C39E"}}>
                <div className={"p-2 d-flex justify-space-around"}>
                    <Button fab color="primary" aria-label="add" onClick={(e)=>this.onAddClick(e)}>
                        <AddIcon />
                    </Button>
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12 col-sm-6 my-3"}>
                            {this.state.workload.map((task,index)=><Event key={index} name={task.name} startTime={moment(task.startTime).format('LT')} endTime={moment(task.endTime).format('LT')} notes={task.notes}/>)}
                        </div>
                        <TimeSummary/>
                        <DayView/>
                        <EventModal
                            open={this.state.modalStatus}
                            onClose={(e)=>this.onAddClick(e)}
                            onClick={(e)=> this.handleAddEvent(e)}
                            handleInputChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;