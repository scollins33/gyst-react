import React from 'react';
import Radio from 'material-ui/Radio';

class RadioButtons extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedValue: props.selected,
        };
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        return (
            <div>
                <Radio
                    checked={this.state.selectedValue === 'focus'}
                    onChange={this.handleChange}
                    value="focus"
                    name="focus"
                    aria-label="Focus"
                />
                <Radio
                    checked={this.state.selectedValue === 'work'}
                    onChange={this.handleChange}
                    value="work"
                    name="work"
                    aria-label="Work"
                />
                <Radio
                    checked={this.state.selectedValue === 'play'}
                    onChange={this.handleChange}
                    value="play"
                    name="play"
                    aria-label="Play"
                />
            </div>
        );
    }
}

export default RadioButtons;