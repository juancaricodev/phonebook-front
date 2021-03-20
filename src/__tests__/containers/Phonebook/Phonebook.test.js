import React from 'react'
import Phonebook from '@containers/Phonebook'
import SearchBar from '@containers/Phonebook/components/SearchBar'
import NumbersFiltered from '@containers/Phonebook/components/NumbersFiltered'
import Numbers from '@containers/Phonebook/components/Numbers'
import { mount, shallow } from 'enzyme'
import { personsMock } from '@tests/__mocks__/personsMock'

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

  test('<SearchBar />', () => {
    const searchBar = phoneBook.find(SearchBar)

    expect(searchBar.length).toEqual(1)
  })

  test('<NumbersFiltered />', () => {
    const numbersFiltered = phoneBook.find(NumbersFiltered)

    expect(numbersFiltered.length).toEqual(1)
  })

  test('<Numbers />', () => {
    const persons = personsMock
    const numbers = phoneBook.find(Numbers)

    expect(numbers.length).toEqual(1)
  })
})
