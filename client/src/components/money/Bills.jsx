import React from 'react';
import CategoryButton from './CategoryButton';

export default class Bills extends React.Component {
    render() {
        const status = "Let's Manage Your Budget!";
        const categories = ['rent', 'utilities', 'gas', 'goals',]

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {categories.map((category, i) => {
                        return <CategoryButton updateCategory={this.props.updateCategory} key={i} className={category}/>
                    })}
                </div>
            </div>
        );
    }
}