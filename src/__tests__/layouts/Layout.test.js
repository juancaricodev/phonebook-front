import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../../layouts/Layout'
import Header from '../../layouts/Layout/components/Header'
import { mount, render } from 'enzyme'

describe('<Layout >/', () => {
  const layout = mount(
    <Router>
      <Layout />
    </Router>
  )

  test('Rendering Layout component', () => {
    expect(layout.length).toEqual(1)
  })

  test('Rendering Header component', () => {
    expect(layout.contains(<Header />))
  })

  test('Rendering .layout div', () => {
    expect(layout.find('.layout').length).toEqual(1)
  })
})
