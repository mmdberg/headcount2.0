import React, { Component } from 'react';
// import { Button } from './Button';
import './styles/buttonContainer.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import HighSchool from './data/high_school_graduation_rates.js';
import SpecialEd from './data/special_education.js';
import Titlei from './data/title_i_students.js';
import MedianIncome from './data/median_household_income.js'

class ButtonContainer extends Component  {
  constructor(props) {
    super(props),
    this.state = {
      selected: 'Select a data set',
      dataList: [
        { type: 'Kindergarteners in Full Day Programs'}, 
        { type: 'High School graduation rates'}, 
        { type: 'Median income data'}
      ]
    }
  }

  getProgram = (program) => {
    this.setState({selected: program})
    if (program === 'Kindergarteners in Full Day Programs'){
      return kinderData
    }

    if (program === 'High School graduation rates') {
      return HighSchool
    }

    if (program === 'Median income data') {
      return MedianIncome
    }
  }


  handleChange = (event) => {
    const newDataSet = this.getProgram(event.target.value)
    this.props.getStats(newDataSet)
  }
  

  render() {
    return (
      <div className='button-container'>
        <h3>Choose an enrollment category to compare districts:</h3>
        <select onChange={this.handleChange}>
          {
            this.state.dataList.map(dataSet => <option>{dataSet.type}</option>)
          }
        </select>
      </div>
    )
  }
}

export default ButtonContainer