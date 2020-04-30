import React from 'react';

export default function EmployeeTable(props) {
    return (
        <table className="u-full-width">
            <thead>
                <tr>
                    <th onClick={() => props.sortBy('name')}>Name <span role="img" aria-labelledby="name">↕️</span></th>   
                    <th onClick={() => props.sortBy('occupation')}>Occupation <span role="img" aria-labelledby="occupation">↕️</span></th>
                    <th onClick={() => props.sortBy('age')}>Age <span role="img" aria-labelledby="age">↕️</span></th>
                    <th onClick={() => props.sortBy('gender')}>Gender <span role="img" aria-labelledby="gender">↕️</span></th>
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
