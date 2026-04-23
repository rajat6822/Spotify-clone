import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

let authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginUser: JSON.parse(localStorage.getItem('log user') || 'null'),
        registerUser: JSON.parse(localStorage.getItem('reg users')),
        invalidEmailOrPassword: false,
        loginData: {
            email: null,
            password: null
        }
    },
    reducers: {
        addLoginUser: (state, action) => {
            if (action.payload.email && action.payload.password) {
                state.registerUser?.find(elem => {
                    if (elem.email === action.payload.email && elem.password === action.payload.password) {
                        localStorage.setItem('log user', JSON.stringify(elem))
                        state.loginUser = elem
                        localStorage.setItem('log user', JSON.stringify(elem))
                    } else {
                        state.invalidEmailOrPassword = true
                        state.loginData.email = action.payload.email
                        state.loginData.password = action.payload.password
                    }
                })
            }
        },
        addRegisterUser: (state, action) => {
            state.registerUser = [...JSON.parse(localStorage.getItem('reg users')), action.payload]
            localStorage.setItem('reg users', JSON.stringify(state.registerUser))
            console.log(state.registerUser)
        },
        removeLoginUser: (state) => {
            localStorage.removeItem('log user')
            state.invalidEmailOrPassword = false

        }
    }
})

export default authSlice.reducer
export const { addLoginUser, addRegisterUser, removeLoginUser, loginData } = authSlice.actions