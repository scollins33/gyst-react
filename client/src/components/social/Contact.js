// React and Material UI imports
import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
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

    handlePick = (event, index, value) => {
        this.setState({ relation: value });
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

                    <Dialog open={this.state.open} autoScrollBodyContent={true} modal={true}>
                        <DialogTitle>Edit Contact</DialogTitle>
                        <DialogContent className={classes.container}>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Name</InputLabel>
                                <Input id="name" value={this.state.name} onChange={this.handleChange} />
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Relation</InputLabel>
                                <Input id="relation" value={this.state.relation} onChange={this.handleChange} />
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel>Birthday</InputLabel>
                                <Input id="birthday" value={this.state.birthday} onChange={this.handleChange} type="date" />
                            </FormControl>

                            {/*<Menu id="relation" floatingLabelText="Relation"*/}
                            {/*value={this.state.relation} onChange={this.handlePick} >*/}
                            {/*<MenuItem value={"Family"} primaryText="Family" />*/}
                            {/*<MenuItem value={"Friend"} primaryText="Friend" />*/}
                            {/*<MenuItem value={"Professional"} primaryText="Professional" />*/}
                            {/*<MenuItem value={"Acquaintance"} primaryText="Acquaintance" />*/}
                            {/*</Menu>*/}

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

                            <Interaction className={classes.formControl} interactions={this.state.interactions} cb={this.handleChange} />
                            <Interaction className={classes.formControl} interactions={this.state.interactions} cb={this.handleChange} />
                            <Interaction className={classes.formControl} interactions={this.state.interactions} cb={this.handleChange} />
                            <Interaction className={classes.formControl} interactions={this.state.interactions} cb={this.handleChange} />
                            <Interaction className={classes.formControl} interactions={this.state.interactions} cb={this.handleChange} />
                            <Interaction className={classes.formControl} interactions={this.state.interactions} cb={this.handleChange} />
                        </DialogContent>

                        <DialogActions>
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