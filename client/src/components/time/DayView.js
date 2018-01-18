import React, {Component} from 'react';

class DayView extends Component {
    constructor() {
        super();

    }
    createHoursView= (task)=>{
        let day=[];
        for (let i=0; i<24; i++){
            day.push(<div style={{backgroundColor: "#fff"}} className={"p-2 mx-1 mb-1"}>{i}:00</div>)
        }
        return day
    };

    render(){
        return(
                    <div className={"col-12 col-sm-6 my-3"}>
                        {this.createHoursView()}
                    </div>
        )
    }
}

export default DayView;