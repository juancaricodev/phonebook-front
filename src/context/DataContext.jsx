import React, { useState, useEffect } from 'react'

import phonebookService from '@services/phonebook'

export const DataContext = React.createContext({})

export const DataContextProvider = ({ children }) => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(err => console.error('Error =>', err))
  }, [])

  const createPerson = (newPerson) => {
    phonebookService
      .create(newPerson)
      .then(newPerson => setPersons([...persons, newPerson]))
      .catch(err => console.log(`Error creating a new person => ${err}`))
  }

  const deletePerson = (id, person) => {
    const deletedPerson = { ...person, deleted: true }

    phonebookService
      .deleteId(id, deletedPerson)
      .then((newData) => {
        setPersons(persons.map(person => (person.id !== id ? person : newData)))
      })
      .catch(err => console.log(`Error deleting person with id ${id} => ${err}`))

    return deletedPerson
  }

  const updateNumber = (personObject, newNumber) => {
    const personId = personObject.id

    const updatedPerson = { ...personObject, number: newNumber }

    phonebookService
      .updateNumber(personId, updatedPerson)
      .then((updated) => {
        setPersons(persons.map(person => (person.id !== personId ? person : updated)))
      })
      .catch(err => console.error(`Error updating person ${updatedPerson.name} with error => ${err}`))
  }

  return (
    <DataContext.Provider value={{ persons, createPerson, deletePerson, updateNumber }}>
      {children}
    </DataContext.Provider>
  )
}
