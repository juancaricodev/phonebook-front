import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../layouts/Layout/index.jsx'
import { mount } from 'enzyme'

describe('<Layout >/', () => {
  test('Rendering Layout component', () => {
    const wrapper = mount(
      <Router>
        <Layout />
      </Router>
    )
    expect(wrapper.length).toEqual(1)
  })
})
