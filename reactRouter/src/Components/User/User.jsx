import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-grey-500 text-white-800'>User: {userid}</div>
  )
}

export default User