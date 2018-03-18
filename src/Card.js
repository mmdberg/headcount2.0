import React, { Component } from 'react';
import './styles/card.css';
import PropTypes from 'prop-types';
import check from './styles/check.png';
import none from './styles/none.gif';

class Card extends Component {  

  yearValues = (stats) => {
    return Object.keys(stats).map(year => {
      let roundedPercent = '';
      let higherAchievement = '';
      if (this.props.statType === 'Percent') {
        let roundedNumber = (stats[year] * 100).toFixed(0);
        higherAchievement = roundedNumber > 50;
        roundedPercent = roundedNumber + '%';
      } else {
        roundedPercent = stats[year];
        higherAchievement = false;
      }
      
      return (
        <li key={year} className="cardStats">
          <img className="check" src={higherAchievement ? check : none} 
            alt="checkmark"/>
          <p className={higherAchievement ?
            "year higher-achievement" : "year"}>{year}: </p>
          <p className={higherAchievement ?
            "year higher-achievement" : "percent"}>{roundedPercent}</p>
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
  statType: PropTypes.string,
  stats: PropTypes.object,
  location: PropTypes.string,
  selectCard: PropTypes.func,
  className: PropTypes.string
};

export default Card;