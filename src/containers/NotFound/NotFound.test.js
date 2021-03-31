import React from 'react'
import NotFound from '@containers/NotFound'
import { Link, MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

describe('<NotFound />', () => {
  const notFound = mount(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  )

  test('NotFound render', () => {
    expect(notFound.find('.not-found').length).toEqual(1)
  })

  test('NotFound title render', () => {
    expect(notFound.find('.not-found__title').length).toEqual(1)
  })

  test('Link to Home page', () => {
    const link = notFound.find(Link)

    expect(link.prop('to')).toBe('/')
    expect(link.text()).toBe('Home Page')
  })
})
