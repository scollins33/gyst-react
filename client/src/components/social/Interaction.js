import React from "react";
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const Interaction = props => {
    return (
        <FormControl fullWidth>

            <InputLabel>Interaction</InputLabel>
            <Input id="interaction" value={props.interactions} cb={props.onChange}
                   multiline={true} rows={1} rowsMax={10}/>

            <IconButton raised onClick={this.handleToggle} color="secondary">
                <DeleteIcon />
            </IconButton>

        </FormControl>
    );
};

export default Interaction;