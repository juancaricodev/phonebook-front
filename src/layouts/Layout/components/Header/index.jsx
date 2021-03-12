import React from 'react'

import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>Home</Link>
      <Link to='/phonebook'>Phonebook</Link>
      <Link to='/new-people'>New People</Link>
    </header>
  )
}

export default Header
