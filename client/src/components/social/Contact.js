import React, { Component } from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

/*
	name: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    relation: {
        type: String,
    },
    methods: {
        home: {
            type: Number,
        },
        work: {
            type: Number,
        },
        mobile: {
            type: Number,
        },
        email: {
            type: String,
        },
    },
    birthday: {
        type: Date,
    },
    interactions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Interaction"
        }
    ]
 */

class Contact extends Component {
    constructor(props) {
        super();

        // State matches the JSON from the MongoDB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            name: props.name,
            favorite: props.favorite,
            relation: props.relation,
            mobile: props.mobile,
            work: props.work,
            email: props.email,
            birthday: props.birthday,
            interactions: props.interactions,
            open: false,
        };
    }

    handleToggle = () => {
        if (this.state.open === true) { this.setState( {open: false}); }
        else { this.setState({open: true}); }
    };

    handleChange = (event) => {
        const property = event.target.id;
        const val = event.target.value;

        console.log(property);
        console.log(val);

        this.setState({
            [property]: val,
        });
    };

    handlePick = (event, index, value) => {
        this.setState({ relation: value });
    };

    render() {
        return (
            <div className={"col-lg-4 col-md-12 mb-3"}>
                <div>
                    <Card className={"p-2"}>
                        <CardTitle style={{padding: "8px"}}
                                   title={"Name: " + this.state.name}/>
                        <CardText style={{padding: "8px"}}>Relation: {this.state.relation}</CardText>
                        <CardText style={{padding: "8px"}}>Last Interaction: {this.state.birthday}</CardText>
                        <CardActions>
                            <FlatButton label="Edit Contact" onClick={this.handleToggle} />
                        </CardActions>
                    </Card>
                </div>

                <div>
                    <Dialog
                        actions={<FlatButton label="Close" primary={true} onClick={this.handleToggle}/>}
                        modal={true} open={this.state.open}
                        onRequestClose={this.handleToggle} >

                        <TextField id="name" floatingLabelText="Name"
                                   value={this.state.name} onChange={this.handleChange}
                                   className={"m-2"} />

                        <TextField id="birthday" floatingLabelText="Birthday"
                                   value={this.state.birthday} onChange={this.handleChange}
                                   type="date" className={"m-2"}/>

                        <SelectField id="relation" floatingLabelText="Relation"
                                     value={this.state.relation} onChange={this.handlePick} >
                            <MenuItem value={"Family"} primaryText="Family" />
                            <MenuItem value={"Friend"} primaryText="Friend" />
                            <MenuItem value={"Professional"} primaryText="Professional" />
                            <MenuItem value={"Acquaintance"} primaryText="Acquaintance" />
                        </SelectField>

                        <Divider />
                        <Subheader>Contact Info</Subheader>

                        <TextField id="mobile" floatingLabelText="Mobile"
                                   value={this.state.mobile} onChange={this.handleChange}
                                   className={"m-2"} />
                        <TextField id="work" floatingLabelText="Work"
                                   value={this.state.work} onChange={this.handleChange}
                                   className={"m-2"} />
                        <TextField id="email" floatingLabelText="Email"
                                   value={this.state.email} onChange={this.handleChange}
                                   className={"m-2"} />

                        <Divider />
                        <Subheader>Interactions</Subheader>

                        <TextField
                            id="interactions" value={this.state.interactions}
                            hintText="Notes on Interactions"
                            multiLine={true} rows={3} rowsMax={10}
                            onChange={this.handleChange} />

                    </Dialog>
                </div>
            </div>
        );
    }
}

export default Contact;