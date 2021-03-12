import React from 'react'

const Numbers = ({ persons, deleteId }) => {
  return (
    <>
      <h3>Numbers</h3>
      <ul>
        {persons.map(person => (
          !person.deleted && (
            <li key={person.name}>
              {person.name} {person.number ? `-  ${person.number}` : ''}
              <button className='delete-btn' type='button' onClick={() => deleteId(person.id)}>Delete</button>
            </li>
          )
        ))}
      </ul>
    </>
  )
}

export default Numbers
