import React, { Component } from "react";
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Contact from '../components/social/Contact';


class Social extends Component {
    constructor (props) {
        super(props);

        this.state = {
            contacts: [],
        }
    }

    /* ------------------------------------
                Class Methods
    ------------------------------------ */

    createContact = () => {
        let contacts = this.state.contacts;

        const newContact = {
            _id: "",
            name: "New Contact",
            favorite: "",
            relation: "",
            methods: {
                mobile: "",
                work: "",
                email: "",
            },
            birthday: 641520000,
            interactions: [],
        };

        contacts.push(newContact);

        this.setState({ contacts });
    };

    /* ------------------------------------
                React Lifecycle
    ------------------------------------ */

    componentDidMount() {
        fetch("/api/getUserSocial/5a6a7a67f7719e16e6f749cb", {method: "GET"})
            .then(res => res.json())
            .then(data => {
                this.setState({contacts: data.contacts});
            });
    }

    render() {
        return (
            <div className={"container mt-3"}>
                <div className={'row'}>
                        <Button fab color="primary" aria-label="New Contact"
                            onClick={this.createContact}>
                            <AddIcon />
                        </Button>
                    </div>

                    <div className="row mt-3">
                        {this.state.contacts.map((each, i) => {
                            return <Contact key={i}
                                            name={each.name}
                                            favorite={each.favorite}
                                            relation={each.relation}
                                            birthday={each.birthday}
                                            methods={each.methods}
                                            interactions={each.interactions}
                                            open={false}/>;
                        })}
                    </div>

            </div>

        );
    }
}

export default Social;