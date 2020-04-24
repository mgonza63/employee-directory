import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
