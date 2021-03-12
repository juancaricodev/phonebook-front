import React from 'react'

const Searchbar = ({ submit, value, change, match, empty }) => {
  return (
    <div className='searchbar-container'>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Search by name'
          value={value}
          onChange={change}
        />
        <button type='submit'>Search</button>
      </form>

      <strong>{match ? '' : 'No match for that search'}</strong>
      <strong>{empty ? 'Search field is empty' : ''}</strong>
    </div>
  )
}

export default Searchbar
