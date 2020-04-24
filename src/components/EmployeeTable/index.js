import React from 'react';

export default function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => props.sortBy('name')}>Name ↕️</th>   
                    <th onClick={() => props.sortBy('occupation')}>Occupation ↕️</th>
                    <th onClick={() => props.sortBy('age')}>Age ↕️</th>
                    <th onClick={() => props.sortBy('gender')}>Gender ↕️</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map( row => (
                        <tr key={row.id}>
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
