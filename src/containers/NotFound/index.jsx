import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className='not-found'>
      <div className='not-found__title'>404: Page Not Found</div>
      <div className='not-found__no-match'>
        No match for: <code>{location.pathname}</code>
      </div>
      <div className='not-found__subtitle'>
        Try going to:{' '}
        <Link className='Link' to='/'>
          Home Page
        </Link>
      </div>
    </div>
  )
}

export default NotFound
