import React from 'react'

const NumbersFiltered = ({ newSearch, filteredData, handleShowAll, deleteId }) => {
  return (
    <div className='filtered-container'>
      <h3>Numbers - filtered by: {newSearch}</h3>
      <ul>
        {filteredData.map(person => (
          !person.deleted && (
            <li key={person.name}>
              {person.name} {person.number ? `-  ${person.number}` : ''}
              <button className='delete-btn' type='button' onClick={() => deleteId(person.id)}>Delete</button>
            </li>
          )
        ))}
        <button type='button' onClick={handleShowAll}>Show All</button>
      </ul>
    </div>
  )
}

export default NumbersFiltered
