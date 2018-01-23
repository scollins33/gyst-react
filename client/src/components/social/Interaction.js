import React from "react";
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const Interaction = props => {
    return (
        <FormControl fullWidth>
            <InputLabel>Interaction</InputLabel>
            <Input id="interaction" value={props.interactions} cb={props.onChange}
                   multiline={true} rows={3} rowsMax={10}/>
        </FormControl>
    );
};

export default Interaction;