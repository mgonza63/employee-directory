import React, { useState } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable"
import Title from "./components/Title"
import Input from "./components/Input"

import { render } from "react-dom";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      employees: employees,
      direction: {
        name: 'asc'
      },
      searchEmployee: ''
    } 
    // bind 'this' to the constructor
    this.sortBy = this.sortBy.bind(this)
  }
  sortBy = (key) => {
    this.setState({
      employees: employees.sort((a, b) => (
        this.state.direction[key] === 'asc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key])
      )),
      direction: {
        [key]:  this.state.direction[key] ==='asc'
        ? 'desc'
        : 'asc'
      }
    })
  }

  handleInput = (e) => {
    // console.log(e.target.value)
    this.setState({ searchEmployee: e.target.value })
  }

  render() {

    let filteredEmployees = this.state.employees.filter((employee) => {
      return employee.name.toLowerCase().includes(this.state.searchEmployee.toLowerCase())
    })

  return (
    <div className="u-full-width">
      <Title>Company Employees</Title>
      <Input handleInput={ this.handleInput }></Input>
      <EmployeeTable 
        filteredEmployees={filteredEmployees}
         sortBy={this.sortBy}
      />
    </div>
  )
}
}
export default App;
