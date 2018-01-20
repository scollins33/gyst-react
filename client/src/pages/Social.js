import React, { Component } from "react";
import Contact from '../components/social/Contact';


class Social extends Component {
    constructor () {
        super();

        this.sampleUsers = [
            {
                name: "Sean",
                relation: "Family",
                birthday: "05/15/1990",
                mobile: "770-333-4412",
                work: "",
                email: "sean@gmail.com",
                interactions: "test intercation note",
            },
            {
                name: "Kim",
                relation: "Friend",
                birthday: "05/15/1990",
                mobile: "770-333-4412",
                work: "770-333-4412",
                email: "kim@gmx.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Mike",
                relation: "Friend",
                birthday: "05/15/1990",
                mobile: "",
                work: "770-333-4412",
                email: "mike@aol.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Musa",
                relation: "Professional",
                birthday: "05/15/1990",
                mobile: "770-333-4412",
                work: "770-333-4412",
                email: "sean@gmail.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Shahein",
                relation: "Lover",
                birthday: "05/15/1990",
                mobile: "770-333-4412",
                work: "",
                email: "sean@gmail.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Franklin",
                relation: "Family",
                birthday: "05/15/1990",
                mobile: "770-333-4412",
                work: "",
                email: "sean@gmail.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
        ]
    }

    render() {
        return (
            <div className={"container mt-5"}>
                <div className={'row'}>
                    {this.sampleUsers.map((each, i) => {
                        console.log(each);
                        console.log(i);
                        return <Contact key={i} name={each.name} relation={each.relation} birthday={each.birthday}
                                        mobile={each.mobile} work={each.work} email={each.email}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Social;