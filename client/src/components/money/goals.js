import React from 'react';

class GoalsDeadline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Goal: true,
            numberOfWeeks: 4
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                        name="numberOfWeekss"
                        type="number"
                        value={this.state.numberOfWeeks}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default GoalsDeadline;