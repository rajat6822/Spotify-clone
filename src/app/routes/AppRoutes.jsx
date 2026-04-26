import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'
import DashboardLayout from '../layouts/DashboardLayout'
import HomePage from '../../features/dashboard/ui/pages/HomePage'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import { useDispatch } from 'react-redux'
import FavouriteSongsPage from '../../features/dashboard/ui/pages/FavouriteSongsPage'
import HoneySinghSongPage from '../../features/dashboard/ui/pages/honeySinghSongPage'

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
                    children: [
                        {
                            path: '',
                            element: <LoginPage />
                        },
                        {
                            path: 'register',
                            element: <RegisterPage />
                        },
                    ]
                }
            ]
        },
        {
            path: '/dashboard',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: '',
                            element: <HomePage />,
                        },
                        {
                            path: 'favouriteSongs',
                            element: <FavouriteSongsPage />
                        },
                        {
                            path: 'honeySinghSongs',
                            element: <HoneySinghSongPage />
                        }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes