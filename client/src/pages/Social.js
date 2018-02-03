import React, { Component } from "react";
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Contact from '../components/social/Contact';

class Social extends Component {
    constructor (props) {
        super(props);

        // double negative to produce boolean value instead of actual value
        const logged = !!localStorage.getItem('user');

        this.pullSocialDB = this.pullSocialDB.bind(this);

        this.state = {
            logged: logged,
            user: localStorage.getItem('user'),
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
            birthday: 1517461200,
            interactions: [],
        };

        contacts.push(newContact);

        this.setState({ contacts });
    };


    // remove and delete Contact from User
    deleteContact = (pArrLoc) => {
        // if it has an id then it is in the DB
        if (this.state.contacts[pArrLoc]._id != null) {
            this.removeContact(this.state.contacts[pArrLoc]._id);
        }
        const contacts = this.state.contacts;
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
        this.state.logged ? this.pullSocialDB() : console.log('Not logged in');
    }

    render() {
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "#dab5ff"
            }}>
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
                                            action={this.pullSocialDB}
                            />;
                        })}
                    </div>
            </div>
            </div>
        );
    }
}

export default Social;