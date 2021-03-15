import React from 'react'
import ReactDOM from 'react-dom'

import { DataContextProvider } from '@context/DataContext'

import App from './routes/App'

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root')
)
