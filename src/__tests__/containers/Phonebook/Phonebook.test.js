import React from 'react'
import Phonebook from '@containers/Phonebook'
import SearchBar from '@containers/Phonebook/components/SearchBar'
import NumbersFiltered from '@containers/Phonebook/components/NumbersFiltered'
import Numbers from '@containers/Phonebook/components/Numbers'
import { mount } from 'enzyme'

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
    const filteredData = [
      {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1,
        deleted: false
      }
    ]
    const numbersFiltered = mount(<NumbersFiltered filteredData={filteredData} />)

    expect(numbersFiltered.find('h3').text().toLowerCase()).toMatch(/filtered/)
    expect(numbersFiltered.find('ul').children('li')).toHaveLength(filteredData.length)
  })

  describe('<Numbers />', () => {
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
    const deleteId = jest.fn()
    const numbers = mount(
      <Numbers
        persons={persons}
        deleteId={deleteId}
      />
    )

    test('Title render', () => {
      expect(numbers.find('h3').text()).toBe('Numbers')
    })

    test('li rendered according to persons quantity', () => {
      expect(numbers.find('ul').children('li')).toHaveLength(persons.length)
    })

    test('Delete button in each li', () => {
      const deleteBtn = numbers.find('ul').children('li').children('button')

      expect(deleteBtn).toHaveLength(persons.length)
      deleteBtn.forEach(node => {
        expect(node.text()).toBe('Delete')
        node.simulate('click')
        expect(deleteId.mock.calls.length).toBe(1)
      })
    })
  })
})
