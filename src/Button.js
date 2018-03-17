import React from 'react';
import './styles/button.css'


export const Button = ({getStats, name, category, handleChange}) => {
  return (
    <option value={name}>{category}</option>
  )

// export const Button = ({changeTitle, getStats, data, category}) => {
//   return (
//     <button onClick={() => {getStats(data); changeTitle(category)}} >{category}</button>
//   )
}