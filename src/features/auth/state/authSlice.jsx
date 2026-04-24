import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { useNavigate } from "react-router";

let authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginUser: JSON.parse(localStorage.getItem('log user') || 'null'),
        registerUser: JSON.parse(localStorage.getItem('reg users')),
        invalidEmailOrPassword: false,
    },
    reducers: {
        addLoginUser: (state, action) => {
            if (action.payload.email && action.payload.password) {
                const matchedUser = state.registerUser.find((elem) => {
                    if (elem.email === action.payload.email &&
                        elem.password === action.payload.password) {
                        return elem
                    }
                })
                if (matchedUser) {
                    localStorage.setItem('log user', JSON.stringify(matchedUser))
                    state.loginUser = matchedUser
                    state.invalidEmailOrPassword = false
                } else {
                    state.invalidEmailOrPassword = true
                }
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