import React, { Component } from 'react';
import Title from '../components/Title';
import ComponentColumn from '../components/ComponentColumn';

class Landing extends Component {
    render() {
        return(
            <div>
                <Title/>
                <div className={"container"}>
                    <div className={"row"}>
                        <ComponentColumn link={"/time"} circleColor={"#F0C39E"} circleText={"time"} text={'manage time'}/>
                        <ComponentColumn link={"/money"} circleColor={"#C8E1B5"} circleText={"$"} text={"manage money"}/>
                        <ComponentColumn link={"/social"} circleColor={"#dab5ff"} circleText={"social"} text={"manage relationships"}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;
