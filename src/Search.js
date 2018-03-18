import React, { Component } from 'react';
import './styles/search.css';
import PropTypes from 'prop-types'


class Search extends Component {

  handleChange = (event) => {
    this.props.filterStats(event.target.value);
  }

  render() {
    return (
        <input  type="text"
                placeholder="Search for a district"
                onChange={this.handleChange}
        />
    );
  }
}

Search.propTypes = {
  filterStats: PropTypes.func
}

export default Search;