import React from 'react'
import Phonebook from '@containers/Phonebook'
import SearchBar from '@containers/Phonebook/components/SearchBar'
import NumbersFiltered from '@containers/Phonebook/components/NumbersFiltered'
import Numbers from '@containers/Phonebook/components/Numbers'
import { mount } from 'enzyme'
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
    const persons = [
      {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1,
        deleted: false
      },
      {
        name: 'Ada Lovelace',
        number: '39-44-5323523',
        id: 2,
        deleted: false
      },
      {
        name: 'Dan Abramov',
        number: '12-43-234345',
        id: 3,
        deleted: false
      }
    ]
    const numbers = mount(<Numbers persons={persons} />)

    expect(numbers.find('h3')).toBe('Numbers')
    expect(numbers.find('il').children()).to.have.lengthOf(persons.length)
  })
})
