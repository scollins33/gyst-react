import React, { Component } from "react";
import Event from '../components/time/Event'
import TimeSummary from "../components/time/TimeSummary";
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import NewEventModal from "../components/time/NewEventModal";
import UpdateEventModal from "../components/time/UpdateEventModal";
import { FormControl } from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';

const moment = require('moment');

class Time extends Component {
    constructor(props){
        super(props);
        this.state={
            displayDate: moment().format('YYYY-MM-DD'),
            workload: [],
            view: "daily",
            newEventModal: false,
            updateEventModal: false,
            newName: "",
            newStart: "",
            newEnd: "",
            newClass: "",
            newNotes: "",
            newRepeat: "",
            updateName: "",
            updateStart: "",
            updateEnd: "",
            updateClass: "",
            updateNotes: "",
            updateRepeat: "",
            updateModalId: ""
        }
    }

    loadEvents =()=>{

        fetch("/api/getEvents",{method: "GET"})
            .then(res=> res.json())
            .then(data=> {
                const displayedDates = data.filter(event=>{
                    return (
                        event.repeat === "daily"||
                        event.repeat === "never" && moment(event.startTime).format("LL") === moment(this.state.displayDate).format("LL")||
                        event.repeat === "weekly" && moment(event.startTime).format('dddd') === moment(this.state.displayDate).format('dddd') ||
                        event.repeat === "monthly" && moment(event.startTime).format("MMM Do") === moment(this.state.displayDate).format("MMM Do") ||
                        event.repeat === "yearly" && moment(event.startTime).format("MMM Do") === moment(this.state.displayDate).format("MMM Do")
                    )
                });
                this.setState({workload: displayedDates})
            })
            .catch(err=>console.log(err));
    };

    componentDidMount(){
        this.loadEvents()
    }

    handleAddEvent=(e)=>{
        if (!this.state.newEventModal){
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

        const postEvent = new Request("/api/addEvent", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent)
        });

        fetch(postEvent)
            .then(res=> res.json())
            .catch(err=> console.log(err));
        console.log("event submitted");
        this.setState({newEventModal: !this.state.newEventModal});
        this.loadEvents();
    };


    handleUpdateEvent=(e)=>{
        if (!this.state.updateEventModal){
            return
        }
        e.preventDefault();

        let updatedEvent = {
            name: this.state.updateName,
            startTime: this.state.updateStart,
            endTime: this.state.updateEnd,
            class: this.state.updateClass,
            notes: this.state.updateNotes,
            repeat: this.state.updateRepeat
        };

        console.log('????????????///?????????????');
        console.log(this.state);
        console.log(updatedEvent);
        console.log('????????????///?????????????');

        const query = new Request("/api/updateEvent/" + this.state.updateModalId, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent)
        });

        fetch(query)
            .then(res=> res.json())
            .catch(err=> console.log(err));
        console.log("event submitted");
        this.setState({updateEventModal: !this.state.updateEventModal});
        this.loadEvents();
    };

    handleDelete=(e, eventId)=>{
        e.preventDefault();
        const deleteRequest = new Request("api/deleteEvent/" + eventId,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        fetch(deleteRequest)
            .then(res=> res.json())
            .catch(err=>console.log(err));
        this.loadEvents();
    };

    handleInputChange=(e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        console.log(this.state)
    };

    handleDateChange=(e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: moment(value).format('YYYY-MM-DD') });
        console.log(this.state);
        this.loadEvents();
    };


    onAddClick=(e)=>{
        e.preventDefault();
        this.setState({newEventModal: !this.state.newEventModal})
    };

    onUpdateClick=(e, eventId)=>{
        e.preventDefault();
        this.setState({updateModalId: eventId});
        this.setState({updateEventModal: !this.state.updateEventModal})
    };

    render() {
        return (
            <div style={{height: "auto", backgroundColor: "#F0C39E"}}>
                <div className={"p-2 d-flex justify-space-around"}>
                    <Button fab color="primary" aria-label="add" onClick={(e)=>this.onAddClick(e)}>
                        <AddIcon />
                    </Button>
                    <FormControl>
                        <InputLabel>Date</InputLabel>
                        <Input name="displayDate" value={this.state.displayDate}
                               onChange={this.handleDateChange} type="date" />
                    </FormControl>
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12 col-sm-6 my-3"}>
                            {this.state.workload.map((task, i)=><Event key={i} id={task._id} name={task.name} startTime={moment(task.startTime).format('LT')} endTime={moment(task.endTime).format('LT')} notes={task.notes} update={this.onUpdateClick} delete={this.handleDelete}/>)}
                        </div>
                        <TimeSummary/>
                        <NewEventModal
                            open={this.state.newEventModal}
                            onClose={(e)=>this.onAddClick(e)}
                            onClick={(e)=> this.handleAddEvent(e)}
                            handleInputChange={this.handleInputChange}
                        />
                        <UpdateEventModal
                            open={this.state.updateEventModal}
                            onClose={(e)=>this.onUpdateClick(e)}
                            onClick={(e)=> this.handleUpdateEvent(e)}
                            handleInputChange={this.handleInputChange}
                            id={this.state.updateModalId}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;