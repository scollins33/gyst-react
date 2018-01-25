import React from 'react';
// import goalsCalculation from '../components/money/goalsCalculation';

class GoalsDeadline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Goal: 10,
            numberOfWeeks: 3,
            weekly: 0,
        };

        this.handleFloatChange = this.handleFloatChange.bind(this);

    }

    handleFloatChange(event) {
        const target = event.target;
        const value = parseFloat(target.value);
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    submit=(event) => {
        event.preventDefault();
        console.log(this.state);

        this.setState({
            weekly: this.state.Goal / this.state.numberOfWeeks,
        });
    };

    budgetPerWeek = () => {
        let tGoal = this.state.Goal;
        let tWeek = this.state.numberOfWeeks;
        let divide = tGoal/ tWeek;
    };

    componentDidMount() {
        this.setState({
            weekly: this.state.Goal / this.state.numberOfWeeks,
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
                        onChange={this.handleFloatChange} />
                </label>
                <br />
                <label>
                    Number of Weeks:
                    <input
                        name="numberOfWeeks"
                        type="number"
                        value={this.state.numberOfWeeks}
                        onChange={this.handleFloatChange} />
                </label>
                <br/>
                <button type="calculate" onClick={(event) => {this.submit(event); this.budgetPerWeek(event)}}>
                    Calculate
                </button>
                <div>
                    <h1>{this.state.weekly}</h1>
                </div>
            </form>


        );


    }
}



export default GoalsDeadline;