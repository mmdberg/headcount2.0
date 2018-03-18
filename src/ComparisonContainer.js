import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/comparisonContainer.css';

const ComparisonContainer = 
  ({selectedCards, comparison, selectCard}) => {
    if (comparison) {
      var newDistricts = Object.keys(comparison);
      var newDistrictValues = Object.values(comparison);
    }
    const comparisonCards = selectedCards.map((district) => {

      return (
        <Card location={district.location}
          stats={district.stats}
          statType={district.statType}
          key={district.location}
          selectCard={selectCard}
          className="card clicked"
        />);
    });

    const cleanPercent = (stat) => {
      if (comparisonCards[0].props.statType === 'Percent'){
        return parseInt(stat * 100) + '%';
      } else {
        return stat.toFixed(0);
      }
    };

    const cleanComparison = (stat) => {
      if (stat > 0 && stat !== Infinity) {
        return parseInt(stat * 100) + '%'; 
      } else {
        return 'not comparable to';
      }
    };
    
    return (
      <div className="comparison-container">
        {comparisonCards[0]}
        {selectedCards.length === 2 &&
        <div className="comparison-card">
          <header className="header-left">
            <h4 className="district-name-left">{newDistricts[0]}</h4>
          </header>
          <header className="header-right">
            <h4 className="district-name-right">{newDistricts[1]}</h4>
          </header>
          <p className="district-percent-left">
            {cleanPercent(newDistrictValues[0])}
          </p>
          <p className="district-percent-right">
            {cleanPercent(newDistrictValues[1])}
          </p>
          <div className="comparison-header">
            <p className="district-percent-text">*Average across all years</p>
            <h2 className="comparison-title">Comparision</h2>
          </div>
          <p className="comparison-text">
            The average of {newDistricts[0]} is &nbsp;
            <span className="district-comparison">
              {cleanComparison(newDistrictValues[2])}
            </span> of the average of &nbsp;
            {newDistricts[1]}.
          </p>
        </div>
        }
        {comparisonCards[1]}
      </div>
    );
  };

ComparisonContainer.propTypes = {
  comparison: PropTypes.object,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.array
};

export default ComparisonContainer;