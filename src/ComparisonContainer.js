import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/comparisonContainer.css';

const ComparisonContainer = ({selectedCards, comparison, selectCard, deselectCard}) => {
  let newDistricts = [];
  let newDistrictValues = [];
  if (comparison) {
    newDistricts = Object.keys(comparison);
    newDistrictValues = Object.values(comparison);
  }
  const comparisonCards = selectedCards.map((district) => {
    return (
      <Card location={district.location}
        stats={district.stats}
        key={district.location}
        selectCard={selectCard}
        deselectCard={deselectCard}
        className="card clicked"
      />);
  });
  return (
    <div className="comparison-container">
      {comparisonCards[0]}

      {selectedCards.length === 2 &&
        <div className="comparison-card">
          <h2>{newDistricts[0]}</h2>
          <p>{newDistrictValues[0]}</p>
          <h2>{newDistricts[2]}</h2>
          <p>{newDistrictValues[2]}</p>          
          <h2>{newDistricts[1]}</h2>
          <p>{newDistrictValues[1]}</p>
        </div>
      }
      {comparisonCards[1]}
    </div>
  );
};

ComparisonContainer.propTypes = {
  selectedCards: PropTypes.array,
  comparison: PropTypes.array,
  selectCard: PropTypes.func,
  deselectCard: PropTypes.func
};


export default ComparisonContainer;