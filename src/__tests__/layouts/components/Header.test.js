import React from 'react'
import Header from '@layouts/Layout/components/Header'
import { shallow } from 'enzyme'

describe('<Header />', () => {
  const header = shallow(<Header />)

  test('Rendering Header', () => {
    expect(header.length).toEqual(1)
  })

  test('Header navbar (.header className)'\, () => {
    expect(header.find('.header').length).toEqual(1)
  })
})
