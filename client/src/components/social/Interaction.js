import React from "react";
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const Interaction = props => {
    return (
        <FormControl fullWidth>

            <InputLabel>Interaction</InputLabel>
            <Input id={props._id} value={`${props.date} | ${props.method} | ${props.note}`} onChange={props.cb}
                   multiline={true} rows={1} rowsMax={10}/>

            <IconButton raised onClick={props.remove} color="secondary">
                <DeleteIcon />
            </IconButton>

        </FormControl>
    );
};

export default Interaction;