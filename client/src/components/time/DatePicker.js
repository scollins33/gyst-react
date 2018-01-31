import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

const DatePicker = props => {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                type="date"
                name="displayDate"
                defaultValue="2017-05-24"
                value={props.displayDate}
                InputProps={props.displayDate}
                onChange={props.handleDateChange}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

DatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);
