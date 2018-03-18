import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/comparisonContainer.css'

const ComparisonContainer = 
  ({selectedCards, comparison, selectCard}) => {
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
          className="card clicked"
        />);
    });
    
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
          <p className="district-percent-left">{(newDistrictValues[0] * 100).toFixed(0)}%</p>
          <p className="district-percent-right">{(newDistrictValues[1] * 100).toFixed(0)}%</p>
          <div className="comparison-header">
            <p className="district-percent-text">*Average across all years</p>
            <h2 className="comparison-title">Comparision</h2>
          </div>
          <p className="comparison-text">The average of {newDistricts[0]} is &nbsp;
            <span className="district-comparison">{(newDistrictValues[2] * 100).toFixed(0)}%</span> of the average of &nbsp;
            {newDistricts[1]}.</p>
        </div>
        }
        {comparisonCards[1]}
    </div>
  )
}

ComparisonContainer.propTypes = {
  comparison: PropTypes.object,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.array
}

export default ComparisonContainer 