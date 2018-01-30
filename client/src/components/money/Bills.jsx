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
                        return <CategoryForm submit={this.props.submit}
                                             handleChange={this.props.handleChange}
                                             updateCategory={this.props.updateCategory}
                                             key={i} className={category}
                                             setValue={this.props.setValue}
                                             i={i}
                                             {...this.props}/>
                    })}
                </div>
            </div>
        );
    }
}