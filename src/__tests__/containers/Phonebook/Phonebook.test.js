import React from 'react'
import Phonebook from "@containers/Phonebook"
import { mount } from "enzyme"

describe('<Phonebook />', () => {
  const phoneBook = mount(<Phonebook />)

  test('Container render', () => {
    expect(phoneBook.find('.phonebook').length).toEqual(1)
  })

  test('Title', () => {
    const title = phoneBook.find('h1')

    expect(title.length).toEqual(1)
    expect(title.text()).toBe('Phonebook')
  })
})