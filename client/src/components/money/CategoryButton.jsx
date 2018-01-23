import React from 'react';

export default class CategoryButton extends React.Component {

    handleClick= () => {
        if(this.props.updateCategory) {
            this.props.updateCategory(this.props.className)
        }
    }

    render() {
        return (
            <button className={this.props.className} onClick={ this.handleClick }>
                {this.props.className}
            </button>
        );
    }
}