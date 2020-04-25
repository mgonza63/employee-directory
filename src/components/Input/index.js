import React from 'react';
import "./style.css"

export default function Input(props) {
    return (
    <input placeholder="Employee Name">{props.children}</input>
    )
  }


