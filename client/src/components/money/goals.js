import React from 'react';

class GoalsDeadline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Goal: 0,
            numberOfWeeks: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    returnWeek = () => {
        return this.state.Goal * this.state.numberOfWeeks
    }


    render() {
        return (
            <form>
                <label>
                    Goal Amount:
                    <input
                        name="Goal"
                        type="number"
                        value={this.state.Goal}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of Weeks:
                    <input
                        name="numberOfWeeks"
                        type="number"
                        value={this.state.numberOfWeeks}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <button type="calculate" onClick={this.props.submit}>
                    Calculate
                </button>
            </form>
        );


    }
}



export default GoalsDeadline;