import React from 'react'
import NewPerson from '@containers/NewPerson'
import { mount } from 'enzyme'
import { createHtmlTagObject } from 'html-webpack-plugin'

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

  test('Inputs for name and phone', () => {
    const input = newPerson.find('input')
    const inputs = input.map(i => i.prop('placeholder'))

    expect(input.length).toEqual(2)
    expect(inputs.find(i => i === 'Name'))
    expect(inputs.find(i => i === 'Phone'))
  })

  test('Button render', () => {
    const button = newPerson.find('button')

    expect(button.length).toEqual(1)
    expect(button.text()).toBe('Add')
  })
})
