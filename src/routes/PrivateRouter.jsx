import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const PrivateRouter = ({children}) => {
    const {user} = UserAuth()
    if(!user){
        return <Navigate to='/' />
    } else{
        return children
    }

  return (
    <div>
      
    </div>
  )
}

export default PrivateRouter
