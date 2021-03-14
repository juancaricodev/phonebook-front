import React, { useState, useEffect, useContext } from 'react'

import Numbers from './components/Numbers'
import NumbersFiltered from './components/NumbersFiltered'
import SearchBar from './components/SearchBar'
import phonebookService from '@services/phonebook'

import Context from '@context/Context'

import './styles.scss'

const Phonebook = () => {
  // const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [match, setMatch] = useState(true)
  const [empty, setEmpty] = useState(false)

  const persons = useContext(Context.Consumer)
  // useEffect(() => {
  //   setPersons(state)
  // }, [state])

  // useEffect(() => {
  //   phonebookService
  //     .getAll()
  //     .then(initialPersons => setPersons(initialPersons))
  //     .catch(err => console.error('Error =>', err))
  // }, [])

  const deletePerson = (id, person) => {
    // const deletedPerson = { ...person, deleted: true }

    // phonebookService
    //   .deleteId(id, deletedPerson)
    //   .then((newData) => {
    //     setPersons(persons.map(person => (person.id !== id ? person : newData)))
    //     filteredData.length > 0 && setFilteredData(filteredData.map(person => (person.id !== id ? person : newData)))
    //   })
    //   .catch(err => console.log(`Error deleting person with id ${id} => ${err}`))
    console.log(id, person)
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)

    window.confirm(`Delete ${person.name}?`) && deletePerson(id, person)
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
      <h1>Phonebook</h1>

      <SearchBar
        submit={handleSearchSubmit}
        value={newSearch}
        change={handleNameSearch}
        match={match}
        empty={empty}
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
          : persons && <Numbers persons={persons} deleteId={id => handleDelete(id)} />
      }
    </div>
  )
}

export default Phonebook
