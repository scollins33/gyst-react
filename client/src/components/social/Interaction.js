import React from "react";
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const Interaction = props => {
    return (
        <FormControl fullWidth>

            <InputLabel>Interaction</InputLabel>
            <Input id={props._id} name={String(props.arrLoc)} value={props.note}
                   onChange={props.cb}
                   multiline={true} rows={1} rowsMax={10}/>

            <IconButton raised color="secondary" onClick={props.cb2}>
                <DeleteIcon />
            </IconButton>

        </FormControl>
    );
};

export default Interaction;