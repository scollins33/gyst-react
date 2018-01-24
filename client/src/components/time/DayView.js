import React, {Component} from 'react';
import Event from './Event'

class DayView extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={"col-12 col-sm-6 my-3"}>
                {this.props.dailyTasks.map(task=><Event name={task.name} startTime={task.startTime} endTime={task.endTime} notes={task.notes}/>)}
            </div>
        )
    }
}

export default DayView;