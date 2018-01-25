import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../components/money/calculator/Calculator.jsx';
import Bills from '../components/money/Bills';
import Graph from '../components/money/graphs';
import GoalsDeadline from "../components/money/GoalsDeadline";
// import GoalsCalculation from "../components/money/GoalsCalculation";


class Money extends React.Component {
    constructor(props) {
        super(props)

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
        event.preventDefault()
        console.log(this.state);
    }

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
        return (
            <div className="budget">
                <div className="calculator">

                </div>
                <div className="bills">


                </div>
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