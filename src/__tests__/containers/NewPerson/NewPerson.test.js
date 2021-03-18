import React from 'react'
import NewPerson from '@containers/NewPerson'
import { mount } from 'enzyme'

describe('<NewPerson />', () => {
  const newPerson = mount(<NewPerson />)

  test('NewPerson render', () => {
    expect(newPerson.find('.new-person').length).toEqual(1)
  })
})
