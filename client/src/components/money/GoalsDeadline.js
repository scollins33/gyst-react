import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';


class GoalsDeadline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Goal: 1,
            numberOfWeeks: 1,
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
                    <Input
                        name="Goal"
                        type="monetary"
                        value={this.state.Goal}
                        onChange={this.handleFloatChange} />
                </label>
                <br />
                <label>
                    Number of Weeks:
                    <Input
                        name="numberOfWeeks"
                        type="monetary"
                        value={this.state.numberOfWeeks}
                        onChange={this.handleFloatChange} />
                </label>
                <br/>
                <Button raised type="calculate" onClick={(event) => {this.submit(event); this.budgetPerWeek(event)}}>
                    Calculate
                </Button>
                <div>
                    <h1>Set Aside:${this.state.weekly} Each Week</h1>
                </div>
            </form>


        );


    }
}



export default GoalsDeadline;

