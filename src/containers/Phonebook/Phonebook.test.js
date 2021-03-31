import React from 'react'
import Phonebook from '@containers/Phonebook'
import SearchBar from '@containers/Phonebook/components/SearchBar'
import NumbersFiltered from '@containers/Phonebook/components/NumbersFiltered'
// import Numbers from '@containers/Phonebook/components/Numbers'
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

  describe('<SearchBar />', () => {
    const searchBar = phoneBook.find(SearchBar)

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

  describe('<NumbersFiltered />', () => {
    const filteredData = [
      {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1,
        deleted: false
      }
    ]
    const numbersFiltered = mount(<NumbersFiltered filteredData={filteredData} />)

    test('Title render', () => {
      expect(numbersFiltered.find('h3').text().toLowerCase()).toMatch(/filtered/)
    })

    test('li render according to data quantity', () => {
      expect(numbersFiltered.find('ul').children('li')).toHaveLength(filteredData.length)
    })
  })

  // describe('<Numbers />', () => {
  //   const persons = [
  //     {
  //       name: 'Arto Hellas',
  //       number: '040-123456',
  //       id: 1,
  //       deleted: false
  //     },
  //     {
  //       name: 'Ada Lovelace',
  //       number: '39-44-5323523',
  //       id: 2,
  //       deleted: false
  //     },
  //     {
  //       name: 'Dan Abramov',
  //       number: '12-43-234345',
  //       id: 3,
  //       deleted: false
  //     }
  //   ]
  //   const handleDelete = jest.fn()
  //   const numbers = mount(
  //     <Numbers
  //       persons={persons}
  //       deleteId={handleDelete}
  //     />
  //   )

  //   test('Title render', () => {
  //     expect(numbers.find('h3').text()).toBe('Numbers')
  //   })

  //   test('li rendered according to persons quantity', () => {
  //     expect(numbers.find('ul').children('li')).toHaveLength(persons.length)
  //   })

  //   describe('delete button', () => {
  //     // Arrange
  //     const deleteBtn = numbers.find('ul').children('li').children('button')

  //     // expect(deleteBtn).toHaveLength(persons.length)
  //     // deleteBtn.forEach(node => {
  //     //   expect(node.text()).toBe('Delete')
  //     //   node.simulate('click')
  //     //   expect(deleteId.mock.calls.length).toBe(0)
  //     // })

  //     test('delete button in each li', () => {
  //       // Arrange

  //       // Act

  //       // Assert
  //       expect(deleteBtn).toHaveLength(persons.length)
  //       deleteBtn.forEach(node => {
  //         expect(node.text()).toBe('Delete')
  //       })
  //     })

  //     test('handleDelete', () => {
  //       // Arrange
  //       const id = 1
  //       // const deleteBtn = numbers.find('ul').children('li').children('button')

  //       // Act
  //       handleDelete(id)
  //       // deleteBtn.simulate('click')

  //       // Assert
  //       expect(handleDelete).toHaveBeenCalledWith(id)
  //     })
  //   })
  // })
})
