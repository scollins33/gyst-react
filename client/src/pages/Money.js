import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../components/money/Calculator.jsx';
import Bills from '../components/money/Bills';
import Graph from '../components/money/graphs';
import GoalsDeadline from "../components/money/goals";



class Money extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            answer: 0,
            rent: 0,
            utilities: 0,
            gas: 0
        }
    }

    handleAnswer = (answer) => {
        this.setState({ answer });
    };

    updateCategoryAmount = (category) => {
        this.setState((state, props) => {
            state[category] = state.answer;
            return state

        })
    };

    render() {
        return (
            <div className="budget">
                <div className="calculator">
                <Calculator handleAnswer={this.handleAnswer}  />
                </div>
                <div className="bills">
                    <Bills   updateCategory={this.updateCategoryAmount}/>

                </div>
                <div className="graph">
                    <Graph bills={this.state} rent={this.state.rent}/>
                </div>
                <div className="GoalsDeadline">
                    <GoalsDeadline/>
                </div>
            </div>
        );
    }
}
export default Money;