import React, { Component } from 'react';
import './styles/card.css';
import PropTypes from 'prop-types';
import check from './styles/check.png'
import none from './styles/none.gif'

class Card extends Component {  

  yearValues = (stats) => {
    return Object.keys(stats).map(year => {
      let roundedPercent = parseInt((stats[year] * 100));
      let higherAchievement = roundedPercent > 50;
      return (
        <li key={year} className="cardStats">
          <img className="check" src={higherAchievement ? check : none} />
          <p className={higherAchievement ? "year higher-achievement" : "year"}>{year}: </p>
          <p className={higherAchievement ? "year higher-achievement" : "percent"}>{roundedPercent}%</p>
        </li>
      );
    });
  }

  handleClick = () => {
    this.props.selectCard(this.props);
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.handleClick} >
        <header>
          <h2 className="district-title">{this.props.location}</h2>   
        </header>
        <ul title="A checkmark indicates a value greater than 50%.">
        {this.yearValues(this.props.stats)}
        </ul>
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