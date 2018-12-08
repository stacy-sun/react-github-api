import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <form onSubmit={this.state.value ? this.handleSubmit : null }>
                <label htmlFor='repo'>Enter a Facebook Repo name: </label>
                <input type='text' name='repo' id='repo' value={this.state.value} onChange={this.handleChange} />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

Input.propTypes = {
    onSubmitForm: PropTypes.func.isRequired
}

export default Input;