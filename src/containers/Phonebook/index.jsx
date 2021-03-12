import React, { useState, useEffect } from 'react'

import NewPeople from './components/NewPeople'
import Numbers from './components/Numbers'
import NumbersFiltered from './components/NumbersFiltered'
import SearchBar from './components/SearchBar'
import phonebookService from '@services/phonebook'

import './styles.scss'

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [match, setMatch] = useState(true)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(err => console.error('Error =>', err))
  }, [])

  const updateNumber = (personObject, newNumber) => {
    const personId = personObject.id

    const updatedPerson = { ...personObject, number: newNumber }

    phonebookService
      .updateNumber(personId, updatedPerson)
      .then((updated) => {
        setPersons(persons.map(person => (person.id !== personId ? person : updated)))
        filteredData.length > 0 && setFilteredData(filteredData.map(person => (person.id !== personId ? person : updated)))
      })
      .catch(err => console.error(`Error updating person ${updatedPerson.name} with error => ${err}`))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPerson = {
      id: Math.max(...persons.map(person => person.id)) + 1,
      name: newName,
      number: newPhone,
      deleted: false
    }

    const nameMatch = persons.find(person => person.name === newPerson.name)

    if (newPerson.name === '' || newPerson.number === '') {
      window.alert('All fields should be filled')
    } else if (nameMatch) {
      window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`) && updateNumber(nameMatch, newPerson.number)
    } else {
      phonebookService
        .create(newPerson)
        .then(newPerson => setPersons([...persons, newPerson]))

      setFilteredData([])
      console.log(newPerson)
    }

    setNewName('')
    setNewPhone('')
    setEmpty(false)
  }

  const deletePerson = (id, person) => {
    const deletedPerson = { ...person, deleted: true }

    phonebookService
      .deleteId(id, deletedPerson)
      .then((newData) => {
        setPersons(persons.map(person => (person.id !== id ? person : newData)))
        filteredData.length > 0 && setFilteredData(filteredData.map(person => (person.id !== id ? person : newData)))
      })
      .catch(err => console.log(`Error deleting person with id ${id} => ${err}`))
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)

    window.confirm(`Delete ${person.name}?`) && deletePerson(id, person)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    const newArray = [...persons]

    const searchLower = newSearch.toLowerCase()

    const filterPersons = newArray.filter(person => person.name.toLowerCase().includes(searchLower))

    if (newSearch.length > 0) {
      setFilteredData(filterPersons)
      setEmpty(false)
    } else {
      setEmpty(true)
    }

    filterPersons.length > 0
      ? setMatch(true)
      : setMatch(false)
  }

  const handleNameSearch = (e) => {
    setNewSearch(e.target.value)
  }

  const handleShowAll = () => {
    setFilteredData([])
    setNewSearch('')
    setEmpty(false)
  }

  return (
    <div className='phonebook'>
      <h2>Phonebook</h2>

      <SearchBar
        submit={handleSearchSubmit}
        value={newSearch}
        change={handleNameSearch}
        match={match}
        empty={empty}
      />

      <h3>Add New</h3>

      <NewPeople
        submit={handleSubmit}
        name={newName}
        nameChange={handleNameChange}
        phone={newPhone}
        phoneChange={handlePhoneChange}
      />

      {
        filteredData.length > 0
          ? (
            <NumbersFiltered
              newSearch={newSearch}
              filteredData={filteredData}
              handleShowAll={handleShowAll}
              deleteId={id => handleDelete(id)}
            />
            )
          : <Numbers persons={persons} deleteId={id => handleDelete(id)} />
      }
    </div>
  )
}

export default Phonebook
