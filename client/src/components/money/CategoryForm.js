import React from 'react';


class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};

    }


    render() {
        console.log('props', this.props);
        return (
            <form onSubmit={this.handleAnswer}>
                <label>
                    <input type="text" name={'input'+this.props.i}  onChange={this.props.handleChange} />
                </label>
                <input type="submit" value={this.props.className} onClick={this.props.submit}/>
            </form>
        );
    }
}

export default CategoryForm;