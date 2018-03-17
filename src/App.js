import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import { CardContainer } from './CardContainer';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import ButtonContainer from './ButtonContainer';
import HighSchool from './data/high_school_graduation_rates.js';
import MedianIncome from './data/median_household_income.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      selectedCards: []
    };
    this.district = '';
    this.comparison = '';
  }

  getStats = (newStats) => {
    this.district = new DistrictRepository(newStats);
    const stats = this.district.findAllMatches();
    this.setState({
      stats
    });
  }

  filterStats = (userInput) => {
    const matchedStats = this.district.findAllMatches(userInput);
    this.setState({stats: matchedStats});
  }

  componentDidMount() {
    this.getStats(kinderData);
  }

  selectCard = (card) => {
    let clickedCards = [...this.state.selectedCards];

    if (card.className.includes("clicked")) {
      this.state.selectedCards.forEach((selectedCard, index) => {
        card.location === selectedCard.location && 
          clickedCards.splice(index, 1);
      });
    } else {
      clickedCards.length < 2 ? 
        clickedCards.push(card) : 
        clickedCards[1] = card;
    }
    this.setState({ selectedCards: clickedCards });
    if (clickedCards.length === 2) {
      console.log(clickedCards[0].location)
      this.comparison =  this.district.compareDistrictAverages(
        clickedCards[0].location, clickedCards[1].location
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <ButtonContainer getStats={this.getStats}/>
        <Search filterData={this.filterStats}/>
        {
          this.state.selectedCards.length > 0 && 
            <ComparisonContainer  
              selectedCards={this.state.selectedCards} 
              selectCard={this.selectCard} 
              comparison={this.comparison} 
            />
        }
        <CardContainer  
          stats={this.state.stats} 
          selectCard={this.selectCard}
          selectedCards={this.state.selectedCards} 
        />
      </div>

    );
  }
}

export default App;
