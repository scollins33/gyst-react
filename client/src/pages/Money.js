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
        const status = "Let's Manage Your Finances!";

        return (
                <Grid container style={{backgroundColor: "#C8E1B5", justifyContent: "flex-start", }}>
                <Grid className="graph" spacing={Number(spacing)} style={{backgroundColor: "#C8E1B5", width:'auto', height:'200px'}} >
                    <Graph bills={this.state} {...this.state} rent={this.state.rent} />
                </Grid>
                    <Grid container className="bills" spacing={Number(spacing)} style={{backgroundColor: "#C8E1B5", width:'auto', height:'auto', marginTop:'180px'}}>
                <Bills updateCategory={this.updateCategoryAmount}
                       handleChange={this.handleChange}
                       {...this.state}
                       submit={this.submit}/>
                    </Grid>
                    <Grid container className="GoalsDeadline" spacing={Number(spacing)} style={{backgroundColor: "#C8E1B5", justifyContent: "left", height:'1000px', width:'300px',
                        marginTop:'350px'}} >
                    <GoalsDeadline submit={this.submit}/>
                </Grid>

                </Grid>
        );
    }
}
export default Money;