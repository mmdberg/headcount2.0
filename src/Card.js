import React, { Component } from 'react';
import './styles/card.css';
import PropTypes from 'prop-types';

class Card extends Component {  

  yearValues = (stats) => {
    return Object.keys(stats).map(year => {
      let roundedPercent = parseInt((stats[year] * 100));
      if (roundedPercent < 50) {
        return <p key={year}>{year}: {roundedPercent}%</p>
      } else {
        return <p key={year} className="higher-achievement">{year}: {roundedPercent}%</p>
      }       
    });
  }

  handleClick = () => {
    this.props.selectCard(this.props);
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.handleClick}>
        <h2>{this.props.location}</h2>
        {this.yearValues(this.props.stats)}
      </div>
    );
  }
}

Card.propTypes = {
  stats: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  selectCard: PropTypes.func,
  className: PropTypes.string
};

export default Card;