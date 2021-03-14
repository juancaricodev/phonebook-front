import React, { createContext, useReducer, useState, useEffect } from 'react'

import phonebookService from '@services/phonebook'
const Context = createContext()

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_STATE':
//       return {
//         ...state
//       }
//     default:
//       return state
//   }
// }

const persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
    deleted: false
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
    deleted: false
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
    deleted: false
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
    deleted: false
  },
  {
    id: 5,
    name: 'Camilo',
    number: '12345',
    deleted: false
  },
  {
    id: 6,
    name: 'Carlos',
    number: '2345423',
    deleted: true
  }
]

const Provider = ({ children }) => {
  // const [persons, setPersons] = useState()
  // const [state, dispatch] = useReducer(reducer, persons)

  // useEffect(() => {
  //   phonebookService
  //     .getAll()
  //     .then(initialPersons => setPersons(initialPersons))
  //     .catch(err => console.error('Error =>', err))
  // }, [])

  return (
    <Context.Provider value={persons}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
