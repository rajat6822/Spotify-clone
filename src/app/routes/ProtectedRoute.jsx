import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../features/auth/hooks/useAuth'

const ProtectedRoute = () => {

    let { isAuthenticated } = useAuth()

    if( !isAuthenticated ) return <Navigate to={'/'}/>

  return <Outlet />
}

export default ProtectedRoute