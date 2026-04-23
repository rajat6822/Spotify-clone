import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../../features//player/state/playerSlice';
import searchReducer from "../../features/dashboard/state/songsSlice"
import authReducer from '../../features/auth/state/authSlice'

export let store = configureStore({
    reducer: {
        player: playerReducer,
        search : searchReducer,
        auth: authReducer
    }
})

export let dispatch = store.dispatch 