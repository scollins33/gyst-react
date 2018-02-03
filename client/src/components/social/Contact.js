import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Interaction from "./Interaction";

const moment = require('moment');

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class Contact extends Component {
    constructor(props) {
        super(props);

        this.user = props.user;
        this.id = props.id;

        // State matches the JSON from the MongoDB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            name: props.name,
            favorite: props.favorite,
            relation: props.relation,
            mobile: props.methods.mobile,
            work: props.methods.work,
            email: props.methods.email,
            birthday: moment.unix(props.birthday).format('YYYY-MM-DD'),
            interactions: props.interactions,
            lastInteract: null,
            open: false,
        };
    }

    /* ------------------------------------
       Custom functions to update state
    ------------------------------------ */

    handleToggle = () => this.state.open ?
        this.setState({ open: false }) : this.setState({ open: true });

    handleFav = () => {
        if (this.state.favorite) {
            this.setState({ favorite: false });
            this.updateFavorite(false);
        } else {
            this.setState({ favorite: true });
            this.updateFavorite(true);
        }
    };

    handleChange = (event) => {
        const property = event.target.id;
        const val = event.target.value;

        this.setState({
            [property]: val,
        });
    };

    handlePick = (event) => {
        this.setState({ relation: event.target.value });
    };

    handleInteract = (pArrLoc, event) => {
        let interactions = this.state.interactions;

        interactions[pArrLoc].note = event.target.value;

        this.setState({ interactions });
    };

    createInteract = () => {
        let interactions = this.state.interactions;

        const newInteract = {
            _id: null,
            contact: null,
            date: moment().unix(),
            method: "",
            note: "",
        };

        // add the new Interaction to the head of the array
        interactions.unshift(newInteract);

        this.setState({ interactions });
    };

    // remove and delete Interaction from Contact
    // pArrLoc is inherently added from the .bind(this, each.arrLoc) in render()
    deleteInteract = (pArrLoc) => {
        let interactions = this.state.interactions;

        // if it has an id then it is in the DB
        if (interactions[pArrLoc]._id != null) {
            this.removeInteract(interactions[pArrLoc]._id);
        }
        // remove the selected Interaction from the array
        interactions.splice(pArrLoc, 1);

        this.setState({ interactions });
    };


    /* ------------------------------------
            API calls to CRUD DB
    ------------------------------------ */

    // Update Favorite
    updateFavorite (pStatus) {
        const data = {
            contact: this.id,
            favorite: pStatus,
        };

        fetch("/api/setFavorite",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(() => {
                console.log('Toggled Favorite');
            });
    };

    // remove and delete Interaction from Contact
    removeInteract (pID) {
        const data = {
            interaction: pID,
            contact: this.id,
        };

        fetch("/api/deleteInteraction",
            {
                method: "DELETE",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(() => {
                console.log("Deleted Interaction");
            });

    };

    saveContact = () => {
        const data = {
            user: this.user,
            id: this.id,
            name: this.state.name,
            relation: this.state.relation,
            birthday: moment(this.state.birthday, 'YYYY-MM-DD').unix(),
            methods: {
                mobile: this.state.mobile,
                work: this.state.work,
                email: this.state.email
            },
            interactions: this.state.interactions,
        };

        fetch("/api/updateContact",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({'Content-Type': 'application/json'}),
            })
            .then(() => {
                console.log("Saved Contact");
                this.handleToggle();
                this.props.action();
            });
    };


    /* ------------------------------------
                React Lifecycle
    ------------------------------------ */

    componentDidMount() {
        if (this.state.interactions.length === 0) {
            this.setState({ lastInteraction: "None" });
        } else {
            this.setState(
                {
                    lastInteraction: moment.unix(this.state.interactions[0].date).format('YYYY-MM-DD')
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.user = nextProps.user;
        this.id = nextProps.id;

        this.setState({
            name: nextProps.name,
            favorite: nextProps.favorite,
            relation: nextProps.relation,
            mobile: nextProps.methods.mobile,
            work: nextProps.methods.work,
            email: nextProps.methods.email,
            birthday: moment.unix(nextProps.birthday).format('YYYY-MM-DD'),
            interactions: nextProps.interactions,
            lastInteraction: moment.unix(nextProps.interactions[0].date).format('YYYY-MM-DD'),
            open: false,
        });
    }

    render() {
        const { classes } = this.props;

        return (
                <div className={"col-lg-4 col-md-12 mb-3"}>
                    <Card>
                        <IconButton style={{"float": "right"}} aria-label="Toggle Favorite"
                                    onClick={this.handleFav}>
                            {(this.state.favorite ? <FavoriteIcon /> : <FavoriteBorder />)}
                        </IconButton>
                        <IconButton style={{"float": "right"}} aria-label="Edit Contact"
                                    onClick={this.handleToggle}>
                            <ModeEdit />
                        </IconButton>

                        <CardContent>
                            <Typography type="headline">{this.state.name}</Typography>
                            <Typography type="body2">Relation: {this.state.relation}</Typography>
                            <Typography type="body2">
                                Last Interaction: {this.state.lastInteraction}</Typography>
                        </CardContent>
                    </Card>

                    <Dialog open={this.state.open}>

                        <DialogTitle>Edit Contact</DialogTitle>
                        <DialogContent className={classes.container}>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Name</InputLabel>
                                <Input id="name" value={this.state.name}
                                       onChange={this.handleChange} />
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Birthday</InputLabel>
                                <Input id="birthday" value={this.state.birthday}
                                       onChange={this.handleChange} type="date" />
                            </FormControl>

                            <div className={"m-2"}>
                                <FormControlLabel value={"Family"} label={"Family"}
                                                  control={<Radio />}
                                                  onChange={this.handlePick}
                                                  checked={this.state.relation === 'Family'}/>
                                <FormControlLabel value={"Friend"} label={"Friend"}
                                                  control={<Radio />}
                                                  onChange={this.handlePick}
                                                  checked={this.state.relation === 'Friend'}/>
                                <FormControlLabel value={"Professional"} label={"Professional"}
                                                  control={<Radio />}
                                                  onChange={this.handlePick}
                                                  checked={this.state.relation === 'Professional'}/>
                                <FormControlLabel value={"Acquaintance"} label={"Acquaintance"}
                                                  control={<Radio />}
                                                  onChange={this.handlePick}
                                                  checked={this.state.relation === 'Acquaintance'}/>
                            </div>

                            <div className={"mb-4"}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Mobile</InputLabel>
                                    <Input id="mobile" value={this.state.mobile}
                                           onChange={this.handleChange} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Work</InputLabel>
                                    <Input id="work" value={this.state.work}
                                           onChange={this.handleChange} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Email</InputLabel>
                                    <Input id="email" value={this.state.email}
                                           onChange={this.handleChange} />
                                </FormControl>
                            </div>

                            {this.state.interactions.map((each, i) => {
                                return <Interaction key={i} {...each}
                                                    cb={this.handleInteract.bind(this, i)}
                                                    cb2={this.deleteInteract.bind(this, i)}/>;
                            })}

                        </DialogContent>

                        <DialogActions>
                            <Button raised onClick={this.createInteract}
                                    color="default">New Interaction</Button>
                            <Button raised onClick={this.handleToggle}
                                    color="default">Close</Button>
                            <Button raised onClick={this.saveContact}
                                    color="primary">Save</Button>
                            <Button raised onClick={this.props.cb}
                                    color="secondary">Delete</Button>
                        </DialogActions>
                    </Dialog>
                </div>
        );
    }
}

export default withStyles(styles)(Contact);