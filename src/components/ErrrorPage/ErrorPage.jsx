import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='items-center p-16 bg-gray-100 text-gray-900'>
      <div className='container  items-center px-5 mx-auto my-8'>
        
        <div className=' text-center'>
          <h2 >
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p >
            {error?.message}
          </p>
          <Link to='/'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage