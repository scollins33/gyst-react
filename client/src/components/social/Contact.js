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
import ModeEdit from 'material-ui-icons/ModeEdit';

// custom Component
import Interaction from "./Interaction";

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

        this.setState({
            [property]: val,
        });
    };

    handlePick = (event) => {
        this.setState({ relation: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
                <div className={"col-lg-4 col-md-12 mb-3"}>
                    <Card>
                        <IconButton style={{"float": "right"}} aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton style={{"float": "right"}} aria-label="Edit Contact"
                                    onClick={this.handleToggle}>
                            <ModeEdit />
                        </IconButton>

                        <CardContent>
                            <Typography type="headline">{this.state.name}</Typography>
                            <Typography type="body2">Relation: {this.state.relation}</Typography>
                            <Typography type="body2">Last Interaction: {this.state.birthday}</Typography>
                        </CardContent>
                    </Card>

                    <Dialog open={this.state.open}>
                        <DialogTitle>Edit Contact</DialogTitle>
                        <DialogContent className={classes.container}>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Name</InputLabel>
                                <Input id="name" value={this.state.name} onChange={this.handleChange} />
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Birthday</InputLabel>
                                <Input id="birthday" value={this.state.birthday} onChange={this.handleChange} type="date" />
                            </FormControl>

                            <div className={"m-2"}>
                                <FormControlLabel value={"Family"} label={"Family"} control={<Radio />}
                                       onChange={this.handlePick} checked={this.state.relation === 'Family'}/>
                                <FormControlLabel value={"Friend"} label={"Friend"} control={<Radio />}
                                       onChange={this.handlePick} checked={this.state.relation === 'Friend'}/>
                                <FormControlLabel value={"Professional"} label={"Professional"} control={<Radio />}
                                       onChange={this.handlePick} checked={this.state.relation === 'Professional'}/>
                                <FormControlLabel value={"Acquaintance"} label={"Acquaintance"} control={<Radio />}
                                       onChange={this.handlePick} checked={this.state.relation === 'Acquaintance'}/>
                            </div>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Mobile</InputLabel>
                                <Input id="mobile" value={this.state.mobile} onChange={this.handleChange} />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Work</InputLabel>
                                <Input id="work" value={this.state.work} onChange={this.handleChange} />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Email</InputLabel>
                                <Input id="email" value={this.state.email} onChange={this.handleChange} />
                            </FormControl>

                            {this.state.interactions.map((each, i) => {
                                return <Interaction key={i} {...each} cb={this.handleChange}/>;
                            })}
                        </DialogContent>

                        <DialogActions>
                            <Button raised onClick={this.handleToggle} color="default">New Interaction</Button>
                            <Button raised onClick={this.handleToggle} color="default">Close</Button>
                            <Button raised onClick={this.handleToggle} color="primary">Save</Button>
                            <Button raised onClick={this.handleToggle} color="secondary">Delete</Button>
                        </DialogActions>
                    </Dialog>
                </div>
        );
    }
}

export default withStyles(styles)(Contact);