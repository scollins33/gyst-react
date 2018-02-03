import React from "react";
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const moment = require('moment');

const Interaction = props => {
    return (
        <FormControl fullWidth>

            <InputLabel>Interaction</InputLabel>
            <Input id={props._id} value={props.note} onChange={props.cb}
                   multiline={true} rows={1} rowsMax={10}/>

            <div className={"d-row d-flex align-items-center"}>
                <IconButton raised color="secondary" onClick={props.cb2}>
                    <DeleteIcon />
                </IconButton>
                <Typography type="body1">
                    Date: {moment.unix(props.date).format('YYYY-MM-DD')}
                    </Typography>
            </div>

        </FormControl>
    );
};

export default Interaction;