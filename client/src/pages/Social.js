import React, { Component } from "react";
import Contact from '../components/social/Contact';

class Social extends Component {
    constructor (props) {
        super(props);

        this.state = {
            contacts: [],
        }
    }

    // componentDidMount() {
    //     fetch("/api/getUserSocial/5a6a7a67f7719e16e6f749cb",{method: "GET"})
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({contacts: data.contacts});
    //         });
    // }

    render() {
        return (
            <div className={"container mt-5"}>
                <div className={'row'}>

                    {this.state.contacts.map((each, i) => {
                        return <Contact key={i} name={each.name} favorite={each.favorite}
                                        relation={each.relation} birthday={each.birthday}
                                        methods={each.methods}
                                        interactions={each.interactions}/>;
                    })}

                </div>
            </div>
        );
    }
}

export default Social;