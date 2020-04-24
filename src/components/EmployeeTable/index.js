import React from 'react';

export default function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map( row => (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.occupation}</td>
                            <td>{row.age}</td>
                            <td>{row.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
