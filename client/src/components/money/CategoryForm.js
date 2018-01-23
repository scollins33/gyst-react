import React from 'react';


class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({input: event.target.input});
    }


    render() {
        return (
            <form onSubmit={this.handleAnswer}>
                <label>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                </label>
                <input type="submit" value= {this.props.className}/>
            </form>
        );
    }
}

export default CategoryForm;