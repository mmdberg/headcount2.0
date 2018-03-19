import React, { Component } from 'react';
import './styles/search.css';
import PropTypes from 'prop-types';


class Search extends Component {

  handleChange = (event) => {
    this.props.filterStats(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <input  type="search"
          placeholder="Search for a district"
          onChange={this.handleChange}
        />
        <h2>Click on two cards below to compare their data.</h2>
      </div>
    );
  }
}

Search.propTypes = {
  filterStats: PropTypes.func
};

export default Search;