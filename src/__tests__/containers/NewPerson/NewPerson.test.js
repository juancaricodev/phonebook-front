import React from 'react'
import NewPerson from '@containers/NewPerson'
import { mount } from 'enzyme'

describe('<NewPerson />', () => {
  const newPerson = mount(<NewPerson />)

  test('Container render', () => {
    expect(newPerson.find('.new-person').length).toEqual(1)
  })

  test('Contains title', () => {
    const title = newPerson.find('h1')

    expect(title.length).toEqual(1)
    expect(title.text().toLowerCase()).toMatch(/add/)
  })
})
