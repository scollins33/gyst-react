import React from 'react';

const TimeSummary = props =>{


    return(
        <div className={"col-12 col-sm-6 my-3"}>
            <div style={{backgroundColor: "#fff", boxShadow: "0px 3px 5px rgba(100, 100, 100, 0.49)"}}>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th scope={"col"}>Time Summary</th>
                            <th scope={"col"}>hours accumulated</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>work</td>
                        <td>{props.work}</td>
                    </tr>
                    <tr>
                        <td>play</td>
                        <td>{props.playHours}</td>
                    </tr>
                    <tr>
                        <td>focus</td>
                        <td>{props.focusHours}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default TimeSummary;