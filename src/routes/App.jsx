import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Layout from '@layouts/Layout'
import Home from '@containers/Home'
import Phonebook from '@containers/Phonebook'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/phonebook' component={Phonebook} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
