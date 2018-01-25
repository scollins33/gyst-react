import React, { Component } from "react";
import Contact from '../components/social/Contact';


class Social extends Component {
    constructor (props) {
        super(props);

        this.sampleUsers = [
            {
                name: "Sean",
                favorite: false,
                relation: "Family",
                birthday: "1990-05-15",
                mobile: "770-333-4412",
                work: "",
                email: "sean@gmail.com",
                interactions: "test intercation note",
            },
            {
                name: "Kim",
                favorite: true,
                relation: "Friend",
                birthday: "1990-05-15",
                mobile: "770-333-4412",
                work: "770-333-4412",
                email: "kim@gmx.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Mike",
                favorite: false,
                relation: "Friend",
                birthday: "1990-05-15",
                mobile: "",
                work: "770-333-4412",
                email: "mike@aol.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Musa",
                favorite: false,
                relation: "Professional",
                birthday: "1990-05-15",
                mobile: "770-333-4412",
                work: "770-333-4412",
                email: "sean@gmail.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Shahein",
                favorite: true,
                relation: "Lover",
                birthday: "1990-05-15",
                mobile: "770-333-4412",
                work: "",
                email: "sean@gmail.com",
                interactions: "laksjdkajsdkl askdljaskldj askljdk lasjdkl ajskld ",
            },
            {
                name: "Franklin",
                favorite: false,
                relation: "Family",
                birthday: "1990-05-15",
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
                        return <Contact key={i} name={each.name} favorite={each.favorite} relation={each.relation} birthday={each.birthday}
                                        mobile={each.mobile} work={each.work} email={each.email} interactions={each.interactions}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Social;