import React, { Component } from 'react';
import { Button } from './Button';
import './styles/buttonContainer.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import HighSchool from './data/high_school_graduation_rates.js';
import SpecialEd from './data/special_education.js';
import Titlei from './data/title_i_students.js';
import OnlinePupil from './data/online_pupil_enrollment.js'


class ButtonContainer extends Component  {
  constructor(props) {
    super(props),
    this.state = {
      title: 'Percent of Kindergartners in Full Day Programs'
    }
  }

  changeTitle = (category) => {
    this.setState({
      title: category
    })
  }

  

  render() {
    return (
      <div className='button-container'>
        <h3>Choose enrollment categories to compare districts:</h3>
        <Button changeTitle={this.changeTitle} getStats={this.props.getStats} data={kinderData} category='Kindergarteners in Full Day Programs'/>
        <Button changeTitle={this.changeTitle} getStats={this.props.getStats} data={HighSchool} category='High School Graduation Rates'/>
        <Button changeTitle={this.changeTitle} getStats={this.props.getStats} data={SpecialEd} category='Special Education'/>
        <Button changeTitle={this.changeTitle} getStats={this.props.getStats} data={Titlei} category='Title I'/>
        <Button changeTitle={this.changeTitle} getStats={this.props.getStats} data={OnlinePupil} category='Online Pupil Enrollment'/>
        <h2 className="category-title">{this.state.title}</h2>
      </div>
    )
  }
}

export default ButtonContainer