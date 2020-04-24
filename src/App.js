import React from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable"
import { render } from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: employees
    } 
  }
  
  render() {
  return (
    <div className="u-full-width">
      <EmployeeTable 
        employees={this.state.data}
        sortBy={this.sortBy}
      />
    </div>
  )
}
}

