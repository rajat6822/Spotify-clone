import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        currentPlayingSong: null,
        isPlaying: false,
    },
    reducers: {
        playNewSong: (state, action) => {
            state.currentPlayingSong = action.payload
            state.isPlaying = true
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => { 
            state.isPlaying = false
        }
    }
})

export default playerSlice.reducer
export let {play, pause, playNewSong} = playerSlice.actions