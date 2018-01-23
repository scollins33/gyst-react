import React from 'react';
import CategoryForm from './CategoryForm';

export default class Bills extends React.Component {
    render() {
        const status = "Let's Manage Your Budget!";
        const categories = ['rent', 'utilities', 'gas',]

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {categories.map((category, i) => {
                        return <CategoryForm updateCategory={this.props.updateCategory} key={i} className={category}/>
                    })}
                </div>
            </div>
        );
    }
}