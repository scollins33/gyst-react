import React from 'react';
import Radio from 'material-ui/Radio';

const RadioButton=props=>{

    return(
        <span>
        <label>{props.name}</label>
        <Radio
            checked={props.selectedValue === props.value}
            onChange={props.handleChange}
            value={props.value}
            name={props.name}
            aria-label={props.aria}
        />
    </span>
    )
};

export default RadioButton;