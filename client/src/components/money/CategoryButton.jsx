import React from 'react';

export default class CategoryButton extends React.Component {

    handleClick= () => {
        if(this.props.updateCategory) {
            this.props.updateCategory(this.props.className)
        }
    }

    render() {
        return (
            <form>
            <label>
                <input type="text" value={this.props.value} />
            </label>
            <button className={this.props.className} onClick={ this.handleClick }>
                {this.props.className}
            </button>
            </form>

        );
    }
}


// render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label>
//
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     );
// }
// }