import { useEffect, useState } from "react"
import { get, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

export const useAuth = () => {

    let navigate = useNavigate()

    if (localStorage.getItem('reg users') === null) {
        localStorage.setItem('reg users', '[]')
    } else if (localStorage.getItem('log user') === null) {
        localStorage.setItem('log user', '{}')
    }
    const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem('log user') || 'null'))
    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem('reg users')))
    const [showPassword, setShowPassword] = useState(false) 
    
    const storedUser = JSON.parse(localStorage.getItem('log user'))

    const [isAuthenticated, setIsAuthenticated] = useState(
        storedUser && storedUser.email && storedUser.password ? true : false
    )  


    let { reset, handleSubmit, register, formState: { errors } } = useForm()

    const handleLoginSubmit = (data) => {
        if (data.email && data.password) {
            registerUser.find((elem) => {
                if (elem.email === data.email && elem.password === data.password) {
                    localStorage.setItem('log user', JSON.stringify(elem))
                    setLoginUser(elem)
                    navigate('/dashboard')
                }
            })
        }
        reset()
    }

    const handleRegisterSubmit = (data) => {
        setRegisterUser(prev => [...prev, data])
        localStorage.setItem('reg users', JSON.stringify([...registerUser, data]))
        reset()
    }

    const deleteLoginUser = () => {
        localStorage.removeItem('log user')
        navigate('/')
    }

    return {
        showPassword,
        setShowPassword,
        handleLoginSubmit,
        handleRegisterSubmit,
        register,
        handleSubmit,
        isAuthenticated,
        deleteLoginUser
    }
}