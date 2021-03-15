import React, { useState, useContext } from 'react'

import Numbers from './components/Numbers'
import NumbersFiltered from './components/NumbersFiltered'
import SearchBar from './components/SearchBar'

import { DataContext } from '@context/DataContext'

import './styles.scss'

const Phonebook = () => {
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [match, setMatch] = useState(true)
  const [empty, setEmpty] = useState(false)

  const { persons, deletePerson } = useContext(DataContext)

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)

    window.confirm(`Delete ${person.name}?`) &&
      Promise.resolve(deletePerson(id, person))
        .then(newData => filteredData.length > 0 &&
          setFilteredData(filteredData.map(person => (person.id !== id ? person : newData))))
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
