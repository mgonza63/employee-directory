import React from 'react';
import "./style.css"

export default function Input(props) {
    return (
    <input onChange={props.handleInput} type="text" placeholder="Employee Name"></input>
    )
  }


