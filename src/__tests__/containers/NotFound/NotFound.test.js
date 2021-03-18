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
})