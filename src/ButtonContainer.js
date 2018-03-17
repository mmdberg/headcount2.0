import React, { Component } from 'react';
import { Button } from './Button';
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
      educationData: [
      { name: 'kinderData',
        text: 'Kindergarteners in Full Day Programs',
        url: kinderData
      }, 
      { name: 'HighSchool',
        text: 'High school data',
        url: HighSchool 
      }, 
      { name: 'MedianIncome',
        text: 'median income data',
        url: MedianIncome
      }]
    }

    this.dropDown = this.state.educationData.map(dataSet => {
      return ( <option value={dataSet.other}>{dataSet.name}</option>
        // <Button 
        // changeTitle={this.changeTitle} 
        // getStats={this.props.getStats} 
        // name={dataSet.name} 
        // category={dataSet.text}
        // onChange={this.handleChange} />
    )
  })
  }

  // changeTitle = (category) => {
  //   this.setState({
  //     title: category
  //   })
  // }


  handleChange = (event) => {
    console.log(event.target.value)
    // let dataSet = (event.target.value).shift()
    // // dataSet.shift()
    // console.log(dataSet)
    // this.setState({
    //   selected: event.target.value

    // })
    this.props.getStats(event.target.value)
  }
  

  render() {
    return (
      <div className='button-container'>
        <h3>Choose enrollment categories to compare districts:</h3>
        <select onChange={this.handleChange}>
         {this.dropDown}
        </select>

        <h2 className="category-title">{this.state.selected}</h2>
      </div>
    )
  }
}

export default ButtonContainer