import React from 'react';

const ValidatorText = props =>{
    if (props.display){
        return (
            <p className={{color: "#fa1414"}}>
                Please input all values before you submit
            </p>
        )
    } else {
        return null
    }
}


export default ValidatorText;