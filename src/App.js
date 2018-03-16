import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import { CardContainer } from './CardContainer';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
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
    const clickedCards = [...this.state.selectedCards];
    clickedCards.length < 2 ? 
      clickedCards.push(card) : 
      clickedCards[1] = card;
    this.setState({selectedCards: clickedCards});
    if (clickedCards.length === 2) {
      this.comparison = 
        this.district.compareDistrictAverages(
          clickedCards[0].location, clickedCards[1].location);
    }
  }

  deselectCard = (card) => {
    let clickedCards = [...this.state.selectedCards];
    this.state.selectedCards.forEach( (selectedCard, index) => {
      if (card.location === selectedCard.location) {
        clickedCards.splice(index, 1);
      }
    });
    this.setState({selectedCards: clickedCards});
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search filterData={this.filterStats}/>
        {
          this.state.selectedCards.length > 0 && 
            <ComparisonContainer  
              selectedCards={this.state.selectedCards} 
              selectCard={this.selectCard} 
              deselectCard={this.deselectCard} 
              comparison={this.comparison} 
            />
        }
        <CardContainer  
          stats={this.state.stats} 
          selectCard={this.selectCard}
          deselectCard={this.deselectCard} 
          selectedCards={this.state.selectedCards} 
        />
      </div>

    );
  }
}

export default App;
