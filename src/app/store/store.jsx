import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../../features//player/state/playerSlice';

export let store = configureStore({
    reducer: {
        player: playerReducer,
    }
})

export let dispatch = store.dispatch