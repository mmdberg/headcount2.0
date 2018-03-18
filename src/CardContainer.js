import React from 'react';
import Card from './Card';
import './styles/cardContainer.css';
import PropTypes from 'prop-types';

export const CardContainer = ({stats, selectCard, selectedCards}) => {

  const cardInfo = stats.map((district, index) => {
    let result = 'card';
    
    selectedCards.forEach(card =>  {
      if ( district.location === card.location) {
        result = 'card clicked';
      } 
    });

    return (
      <Card 
        location={district.location} 
        stats={district.stats} 
        statType={district.statType}
        key={index} 
        selectCard={selectCard}
        className={result}
      />);
  });
  
  return (
    <div className="card-container">
      {cardInfo}
    </div>
  );
};

CardContainer.propTypes = {
  stats: PropTypes.array,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.array
};