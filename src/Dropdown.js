import React, { Component } from 'react';
import './styles/dropdown.css';
import { dataList, getProgram } from './dataCategories';

class Dropdown extends Component  {

  handleChange = (event) => {
    const newDataSet = getProgram(event.target.value)
    this.props.getStats(newDataSet)
  }
  
  render() {
    return (
      <div className='dropdown-container'>
        <h3>Choose an enrollment category to compare districts:</h3>
        <select onChange={this.handleChange}>
          {
            dataList.map(dataSet => <option>{dataSet.type}</option>)
          }
        </select>
      </div>
    )
  }
}

export default Dropdown