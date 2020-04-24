import React from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable"
import { render } from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: employees,
      direction: {
        name: 'asc'
      }
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

  render() {
  return (
    <div className="u-full-width">
      <EmployeeTable 
        employees={this.state.employees}
         sortBy={this.sortBy}
      />
    </div>
  )
}
}
export default App;
