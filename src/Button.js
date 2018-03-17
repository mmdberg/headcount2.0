import React from 'react';
import './styles/button.css'


export const Button = ({changeTitle, getStats, data, category}) => {
  return (
    <button onClick={() => {getStats(data); changeTitle(category)}} >{category}</button>
  )
}