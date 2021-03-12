import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Layout from '@layouts/Layout'
import Home from '@containers/Home'
import Phonebook from '@containers/Phonebook'
import NotFound from '@containers/NotFound'
import NewPeople from '@containers/NewPeople'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/phonebook' component={Phonebook} />
          <Route exact path='/new-people' component={NewPeople} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
