import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userId}=useParams();//userId same jo route me variable liya main.jsx me wahi yaha pe lo 
  return (
    <div className='bg-gray-600 text-white text-4xl p-4'>
      User:{userId}
    </div>
  )
}

export default User
