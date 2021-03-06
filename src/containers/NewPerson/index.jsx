import React, { useState, useContext } from 'react'

import { DataContext } from '@context/DataContext'

import './styles.scss'

const NewPerson = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const { persons, updateNumber, createPerson } = useContext(DataContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPerson = {
      id: Math.max(...persons.map(person => person.id)) + 1,
      name: newName,
      number: newPhone,
      deleted: false
    }

    const nameMatch = persons.find(person => person.name === newPerson.name)

    if (newPerson.name === '' || newPerson.number === '') {
      window.alert('All fields should be filled')
    } else if (nameMatch) {
      window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`) && (
        Promise.resolve(updateNumber(nameMatch, newPerson.number))
          .then(window.alert(`${newPerson.name}'s number updated`))
      )
    } else {
      createPerson(newPerson)
      window.alert(`${newPerson.name} has been created`)
    }

    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  return (
    <div className='new-person'>
      <h1>Add New Person</h1>

      <form className='new-people-form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={newName}
            onChange={handleNameChange}
            placeholder='Name'
          />
        </div>

        <div>
          <input
            type='text'
            value={newPhone}
            onChange={handlePhoneChange}
            placeholder='Phone'
          />
        </div>

        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default NewPerson
