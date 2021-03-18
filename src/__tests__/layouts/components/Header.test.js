import React from 'react'
import Header from '@layouts/Layout/components/Header'
import { mount } from 'enzyme'

describe('<Header />', () => {
  const header = mount(<Header />)

  test('Rendering Header', () => {
    expect(header.length).toEqual(1)
  })
})
