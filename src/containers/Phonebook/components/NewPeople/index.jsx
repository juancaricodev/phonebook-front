import React from 'react'

const NewPeople = ({ submit, name, nameChange, phone, phoneChange }) => {
  return (
    <form className='new-people-form' onSubmit={submit}>
      <div>
        <input
          type='text'
          value={name}
          onChange={nameChange}
          placeholder='Name'
        />
      </div>

      <div>
        <input
          type='text'
          value={phone}
          onChange={phoneChange}
          placeholder='Phone'
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}

export default NewPeople
