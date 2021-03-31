import React from 'react'
import Header from '@layouts/Layout/components/Header'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'

describe('<Header />', () => {
  const header = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

  test('Rendering Header', () => {
    expect(header.length).toEqual(1)
  })

  test('Header navbar (.header className)', () => {
    expect(header.find('.header').length).toEqual(1)
  })

  test('Route links', () => {
    const routes = header.find(Link).map(link => link.prop('to'))
    expect(routes[0]).toBe('/')
    expect(routes[1]).toBe('/phonebook')
    expect(routes[2]).toBe('/new-person')
  })
})
