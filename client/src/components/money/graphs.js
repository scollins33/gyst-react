
import React from 'react';
import BarChart from 'react-bar-chart';
import Bills from './Bills';

import createReactClass from 'create-react-class';
var _this = this;




const data = [
    Bills,
    {text: 'rent', value: this.props.Bills.rent},
    {text: 'utilities', value: 10},
    {text: 'gas', value: 49},
    {text: 'goals', value: 36}
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const Graph = createReactClass({
    displayName: 'graphBills',

    getInitialState() {
        return { width: 500 };
    },

    componentDidMount: () => {

    },

    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    },

    render() {
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
});

export default Graph;