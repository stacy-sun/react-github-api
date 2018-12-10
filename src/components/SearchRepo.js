import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchRepo extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitRepo(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <form onSubmit={this.state.value ? this.handleSubmit : null}>
                <label htmlFor='repo'>Enter a Facebook Repo name: </label>
                <input type='text' name='repo' id='repo' value={this.state.value} onChange={this.handleChange} />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

SearchRepo.propTypes = {
    onSubmitRepo: PropTypes.func.isRequired
}

export default SearchRepo;