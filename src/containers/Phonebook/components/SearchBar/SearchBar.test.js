import React from 'react'
import { mount } from 'enzyme'
import SearchBar from '@containers/Phonebook/components/SearchBar'

describe('<SearchBar />', () => {
  const searchBar = mount(<SearchBar />)

  test('Container render', () => {
    expect(searchBar.length).toEqual(1)
  })

  test('Input render', () => {
    expect(searchBar.find('input').prop('placeholder')).toBe('Search by name')
  })

  test('Button render', () => {
    const button = searchBar.find('button')

    expect(button.length).toEqual(1)
    expect(button.prop('type')).toBe('submit')
    expect(button.text()).toBe('Search')
  })
})
