import React, { useState, useEffect } from 'react'

import phonebookService from '@services/phonebook'

const NewPeople = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(err => console.error('Error =>', err))
  }, [])

  const updateNumber = (personObject, newNumber) => {
    const personId = personObject.id

    const updatedPerson = { ...personObject, number: newNumber }

    phonebookService
      .updateNumber(personId, updatedPerson)
      .then((updated) => {
        setPersons(persons.map(person => (person.id !== personId ? person : updated)))
        // filteredData.length > 0 && setFilteredData(filteredData.map(person => (person.id !== personId ? person : updated)))
      })
      .catch(err => console.error(`Error updating person ${updatedPerson.name} with error => ${err}`))
  }

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
      window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`) && updateNumber(nameMatch, newPerson.number)
    } else {
      phonebookService
        .create(newPerson)
        .then(newPerson => setPersons([...persons, newPerson]))

      // setFilteredData([])
      console.log(newPerson)
    }

    setNewName('')
    setNewPhone('')
    // setEmpty(false)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  return (
    <>
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
    </>
  )
}

export default NewPeople
