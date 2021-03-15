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

  return (
    <DataContext.Provider value={{ persons, deletePerson }}>
      {children}
    </DataContext.Provider>
  )
}
