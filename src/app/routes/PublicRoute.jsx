import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../store/store'
import { useAuth } from '../../features/auth/hooks/useAuth'

const PublicRoute = () => {

    let  { isAuthenticated } = useAuth()

    if( isAuthenticated ) return <Navigate to={'/dashboard'} /> 

  return <Outlet />
}

export default PublicRoute