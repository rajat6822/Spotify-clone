import { useEffect, useState } from "react"
import { get, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { addLoginUser, addRegisterUser, removeLoginUser } from "../state/authSlice"

export const useAuth = () => {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { loginUser, registerUser, invalidEmailOrPassword } = useSelector(state => state.auth)

    let { reset, handleSubmit, register, formState: { errors } } = useForm({
        mode: 'onChange'
    })

    if (localStorage.getItem('reg users') === null) {
        localStorage.setItem('reg users', '[]')
    } else if (localStorage.getItem('log user') === null) {
        localStorage.setItem('log user', '{}')
    }
    
    const [showPassword, setShowPassword] = useState(false)

    const storedUser = JSON.parse(localStorage.getItem('log user'))

    const [isAuthenticated, setIsAuthenticated] = useState(
        storedUser && storedUser.email && storedUser.password ? true : false
    )

    const handleLoginSubmit = (data) => {
        dispatch(addLoginUser(data))
        
        const storedUser = JSON.parse(localStorage.getItem('log user'))
        
        if(storedUser && storedUser.email && storedUser.password){
            reset()
            navigate('/dashboard')
        }
    }

    const handleRegisterSubmit = (data) => {
        dispatch(addRegisterUser(data))
        reset()
    }

    const deleteLoginUser = () => {
        dispatch(removeLoginUser())
        navigate('/')
    }

    return {
        showPassword,
        setShowPassword,
        handleLoginSubmit,
        handleRegisterSubmit,
        register,
        handleSubmit,
        deleteLoginUser,
        isAuthenticated,
        errors,
        invalidEmailOrPassword,
    }
}