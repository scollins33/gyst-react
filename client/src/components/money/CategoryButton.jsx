import React from 'react';


export default class CategoryButton extends React.Component {

    handleClick= () => {
        if(this.props.updateCategory) {
            this.props.updateCategory(this.props.className)
        }
    };

    render() {
        return (
            <form>
                <label>

                    <input type="text" className={this.props.className} onClick={ this.handleClick }/>

                </label>
                <input type="submit" value= {this.props.className} />
            </form>
        );
    }
}


