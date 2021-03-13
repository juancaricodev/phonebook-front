import React, { createContext, useState, useEffect } from 'react'

import phonebookService from '@services/phonebook'
const Context = createContext()

const FetchContext = ({ children }) => {
  const [persons, setPersons] = useState()

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(err => console.error('Error =>', err))
  }, [])

  return (
    <Context.Provider value={persons}>
      {children}
    </Context.Provider>
  )
}

export default FetchContext
