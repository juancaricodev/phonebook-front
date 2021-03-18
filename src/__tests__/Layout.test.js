import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../layouts/Layout/index.jsx'
import { mount } from 'enzyme'

test('Rendering layout component', () => {
  const wrapper = mount(
    <Router>
      <Layout />
    </Router>
  )
})
