import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';


class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};

    }


    render() {
        console.log('props', this.props);
        return (
            <FormControl onSubmit={this.handleAnswer}>

                <Input type="text" name={'input'+this.props.i}  onChange={this.props.handleChange} />

                <label>{this.props.className}</label>

            </FormControl>
        );
    }
}

export default CategoryForm;

// *<Input type="submit" value={this.props.className} onClick={this.props.submit}/>*