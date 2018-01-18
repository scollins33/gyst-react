import React from 'react';

const TimeSummary = props =>{


    return(
        <div className={"col-12 col-sm-6 my-3"}>
            <div style={{backgroundColor: "#fff"}}>
                <table className={"table"}>
                    <theaad>
                        <tr>
                            <th scope={"col"}>Time Summary</th>
                            <th scope={"col"}>hours accumulated</th>
                        </tr>
                    </theaad>
                    <tbody>
                    <tr>
                        <td scope={"col"}>work</td>
                        <td scope={"col"}>{props.work}</td>
                    </tr>
                    <tr>
                        <td scope={"col"}>play</td>
                        <td scope={"col"}>{props.playHours}</td>
                    </tr>
                    <tr>
                        <td scope={"col"}>focus</td>
                        <td scope={"col"}>{props.focusHours}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default TimeSummary;