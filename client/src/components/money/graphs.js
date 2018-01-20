
import React from 'react';
import BarChart from 'react-bar-chart';
import Bills from './Bills';

import createReactClass from 'create-react-class';
var _this = this;




const data = [
    Bills,
    {text: 'rent', value: 15},
    {text: 'utilities', value: 10},
    {text: 'gas', value: 49},
    {text: 'goals', value: 36}
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// createReactClass
// React.createComponent?

// Functional

// class

// higher order components

class Graph extends React.Component{
    displayName = 'graphBills';

    state = {
        width: 500
    };

    componentDidMount =  () => {

    };

    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    };

    render() {

        console.log("Bills: ", this.props.bills);
        return React.createElement(
            'div',
            { ref: 'root' },
            React.createElement(
                'div',
                { style: { width: '50%' } },
                React.createElement(BarChart, { ylabel: '',
                    width: this.state.width,
                    height: 500,
                    margin: margin,
                    data: data,
                    onBarClick: this.handleBarClick })
            )
        );
    }
};

export default Graph;