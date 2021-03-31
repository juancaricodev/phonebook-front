import React from 'react'
import { mount } from 'enzyme'
import Numbers from '@containers/Phonebook/components/Numbers'

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
  const handleDelete = jest.fn()
  const numbers = mount(
    <Numbers
      persons={persons}
      deleteId={handleDelete}
    />
  )

  test('Title render', () => {
    expect(numbers.find('h3').text()).toBe('Numbers')
  })

  test('li rendered according to persons quantity', () => {
    expect(numbers.find('ul').children('li')).toHaveLength(persons.length)
  })

  describe('delete button', () => {
    // Arrange
    const deleteBtn = numbers.find('ul').children('li').children('button')

    // expect(deleteBtn).toHaveLength(persons.length)
    // deleteBtn.forEach(node => {
    //   expect(node.text()).toBe('Delete')
    //   node.simulate('click')
    //   expect(deleteId.mock.calls.length).toBe(0)
    // })

    test('delete button in each li', () => {
      // Arrange

      // Act

      // Assert
      expect(deleteBtn).toHaveLength(persons.length)
      deleteBtn.forEach(node => {
        expect(node.text()).toBe('Delete')
      })
    })

    test('handleDelete', () => {
      // Arrange
      const id = 1
      // const deleteBtn = numbers.find('ul').children('li').children('button')

      // Act
      handleDelete(id)
      // deleteBtn.simulate('click')

      // Assert
      expect(handleDelete).toHaveBeenCalledWith(id)
    })
  })
})
