import React, { Component } from "react";
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Contact from '../components/social/Contact';


class Social extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: "5a6a7a67f7719e16e6f749cb",
            contacts: [],
        }
    }

    /* ------------------------------------
                Class Methods
    ------------------------------------ */

    createContact = () => {
        let contacts = this.state.contacts;

        const newContact = {
            _id: null,
            user: this.state.user,
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


    // remove and delete Contact from User
    deleteContact = (pArrLoc) => {
        let contacts = this.state.contacts;

        // if it has an id then it is in the DB
        if (contacts[pArrLoc]._id != null) {
            this.removeContact(contacts[pArrLoc]._id);
        }

        // remove the selected Interaction from the array
        contacts.splice(pArrLoc, 1);

        this.setState({ contacts });
    };

    // also delete all Interactions in the DB for that Contact
    removeContact (pID) {
        const data = {
            contact: pID,
            user: this.state.user,
        };

        fetch("/api/deleteContact",
            {
                method: "DELETE",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(res => {
                console.log(res);
            });
    };

    pullSocialDB () {
        fetch(`/api/getUserSocial/${this.state.user}`, {method: "GET"})
            .then(res => res.json())
            .then(data => {
                this.setState({contacts: data.contacts});
            });
    };

    /* ------------------------------------
                React Lifecycle
    ------------------------------------ */

    componentDidMount() {
        this.pullSocialDB();
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
                                            id={each._id}
                                            user={this.state.user}
                                            name={each.name}
                                            favorite={each.favorite}
                                            relation={each.relation}
                                            birthday={each.birthday}
                                            methods={each.methods}
                                            interactions={each.interactions}
                                            open={false}
                                            cb={this.deleteContact.bind(this, i)}
                            />;
                        })}
                    </div>

            </div>

        );
    }
}

export default Social;