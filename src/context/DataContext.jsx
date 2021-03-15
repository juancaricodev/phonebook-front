import React, { useState, useEffect } from 'react'

import phonebookService from '@services/phonebook'

export const DataContext = React.createContext({})

// const initialData = [
//   {
//     name: 'Arto Hellas',
//     number: '040-123456',
//     id: 1,
//     deleted: false
//   },
//   {
//     name: 'Ada Lovelace',
//     number: '39-44-5323523',
//     id: 2,
//     deleted: false
//   },
//   {
//     name: 'Dan Abramov',
//     number: '12-43-234345',
//     id: 3,
//     deleted: false
//   },
//   {
//     name: 'Mary Poppendieck',
//     number: '39-23-6423122',
//     id: 4,
//     deleted: false
//   },
//   {
//     id: 5,
//     name: 'Camilo',
//     number: '12345',
//     deleted: false
//   },
//   {
//     id: 6,
//     name: 'Carlos',
//     number: '2345423',
//     deleted: true
//   }
// ]

export const DataContextProvider = ({ children }) => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(err => console.error('Error =>', err))
  }, [])

  return (
    <DataContext.Provider value={{ persons, setPersons }}>
      {children}
    </DataContext.Provider>
  )
}
