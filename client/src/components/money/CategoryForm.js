import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';



class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};

    }


    render() {
        console.log('props', this.props);
        return (
            <FormControl onSubmit={this.handleAnswer}>
                <label>
                    <Input type="text" name={'input'+this.props.i}  onChange={this.props.handleChange} />
                </label>
                <input type="submit" value={this.props.className} onClick={this.props.submit}/>
            </FormControl>
        );
    }
}

export default CategoryForm;