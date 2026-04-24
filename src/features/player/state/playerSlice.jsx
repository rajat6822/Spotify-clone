import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";
import SongCard from "../../dashboard/ui/components/SongCard";
import { set } from "react-hook-form";

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        currentPlayingSong: null,
        isPlaying: false,
        songs: [],
        currentIndex: 0,
        autoRepeat: false,
        autoPlay: false,
    },
    reducers: {
        playNewSong: (state, action) => {
            state.currentPlayingSong = action.payload
            state.isPlaying = true
            console.log(state.currentPlayingSong)
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => { 
            state.isPlaying = false
        },
        setSongs: (state, action) => {
            state.songs = action.payload
        },
        nextSong: (state) => {
            state.currentIndex = state.currentIndex + 1
            state.currentPlayingSong = state.songs[state.currentIndex]
            state.isPlaying = true
        },
        prevSong: (state) => {
            state.currentIndex = state.currentIndex - 1
            state.currentPlayingSong = state.songs[state.currentIndex]
            state.isPlaying = true
        },
        setAutoRepeat: (state) => {
            state.autoRepeat = !state.autoRepeat
        },
        setAutoPlay: (state) => {
            state.autoPlayplay = !state.autoPlay
        }
    }
})

export default playerSlice.reducer
export let {
    play, 
    pause, 
    playNewSong,
    setSongs,
    nextSong,
    prevSong,
    setAutoRepeat,
    setAutoReplay
} = playerSlice.actions