import React from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable"


export default function App() {
  return (
    <div className="u-full-width">
      <EmployeeTable employees={employees}/>
    </div>
  )
}

