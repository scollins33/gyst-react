
import React from 'react';
import BarChart from 'react-bar-chart';

const margin = { top: 40, right: 40, bottom: 30, left: 40 };

// createReactClass
// React.createComponent?

// Functional

// class

// higher order components

class Graph extends React.Component{

    displayName = 'graphBills';

    state = {
        width: 400,
    };

    render() {
        const data = [

            {text: 'rent', value: this.props.input0},
            {text: 'utilities', value: this.props.input1},
            {text: 'gas', value: this.props.input2},

        ];

        console.log("graph: ", this.props);
        return React.createElement(
            'div',
            { ref: 'root' },
            React.createElement(
                'div',
                { style: { width: '50%' } },
                React.createElement(BarChart, { ylabel: '',
                    width: this.state.width,
                    height:400,
                    margin: margin,
                    data: data,
                    onBarClick: this.handleBarClick })
            )
        );
    }
};

export default Graph;