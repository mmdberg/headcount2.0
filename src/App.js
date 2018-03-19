import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import { CardContainer } from './CardContainer';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import Dropdown from './Dropdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      selectedCards: []
    };
    this.district = '';
  }

  getStats = (newStats) => {
    this.district = new DistrictRepository(newStats);
    const stats = this.district.findAllMatches();
    this.setState({
      stats,
      selectedCards: []
    });
  }

  filterStats = (userInput) => {
    const matchedStats = this.district.findAllMatches(userInput);
    this.setState({stats: matchedStats});
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
    this.compareCards(clickedCards);
  }

  compareCards = (clickedCards) => {
    if (clickedCards.length === 2) {
      const comparison =  this.district.compareDistrictAverages(
        clickedCards[0].location, clickedCards[1].location
      );
      this.setState({
        comparison
      });
    }
  }

  componentDidMount() {
    this.getStats(kinderData);
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Dropdown getStats={this.getStats}/>
        <Search filterStats={this.filterStats}/>
        {
          this.state.selectedCards.length > 0 && 
            <ComparisonContainer  
              selectedCards={this.state.selectedCards} 
              selectCard={this.selectCard} 
              comparison={this.state.comparison} 
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
