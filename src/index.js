import React from 'react'
import ReactDOM from 'react-dom'

import { DataContextProvider } from '@context/DataContext'

import App from './routes/App'

// const persons = [
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

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root')
)
