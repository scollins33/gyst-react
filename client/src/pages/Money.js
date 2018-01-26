import React from 'react';
import Bills from '../components/money/Bills';
import Graph from '../components/money/graphs';
import GoalsDeadline from "../components/money/GoalsDeadline";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});




class Money extends React.Component {
    state = {
        spacing: '16',
    };
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            rent: 0,
            utilities: 0,
            gas: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleAnswer = (input) => {
        this.setState({ input });
    };

    submit=(event) => {
        event.preventDefault();
        console.log(this.state);
    };

    handleChange(event) {
        console.log('is it working', event.target.name);
        this.setState({[event.target.name]: event.target.value});

    }

    updateCategoryAmount = (category) => {
        this.setState((state, props) => {
            state[category] = state.input;
            console.log('what is my input',state.input);

            return state

        })
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <div className="budget">
                <div className="graph">
                    <Graph bills={this.state} {...this.state} rent={this.state.rent}/>
                </div>
                <Bills updateCategory={this.updateCategoryAmount}
                       handleChange={this.handleChange}
                       {...this.state}
                       submit={this.submit}/>
                <div className="GoalsDeadline">
                    <GoalsDeadline submit={this.submit} />
                </div>
            </div>
        );
    }
}
export default Money;