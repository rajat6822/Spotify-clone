import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../../features//player/state/playerSlice';
import searchReducer from "../../features/dashboard/state/searchSlice"
import authReducer from '../../features/auth/state/authSlice'
import favSongReducer from '../../features/dashboard/state/favSongSlice'

export let store = configureStore({
    reducer: {
        player: playerReducer,
        search : searchReducer,
        auth: authReducer,
        favSong: favSongReducer
    }
})

export let dispatch = store.dispatch 