import React from 'react'
import ReactDOM from 'react-dom'
import Context from './context/Context'

import App from './routes/App'

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)
