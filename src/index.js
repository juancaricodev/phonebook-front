import React from 'react'
import ReactDOM from 'react-dom'
import FetchContext from './context/FetchContext'

import App from './routes/App'

ReactDOM.render(
  <FetchContext>
    <App />
  </FetchContext>,
  document.getElementById('root')
)
