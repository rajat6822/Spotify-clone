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
        currentTime: 0,
        totalDuration: 0
    },
    reducers: {
        playNewSong: (state, action) => {
            state.currentPlayingSong = action.payload.song
            state.currentIndex = action.payload.index
            state.isPlaying = true
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
            if(state.currentIndex == state.songs.length - 1){
                state.currentIndex = 0
                state.currentPlayingSong = state.songs[state.currentIndex]
                state.isPlaying = true
            }else{
                state.currentIndex = state.currentIndex + 1
                state.currentPlayingSong = state.songs[state.currentIndex]
                state.isPlaying = true
            }
        },
        prevSong: (state) => {
            if(state.currentIndex == 0){
                state.currentIndex = state.songs.length - 1
                state.currentPlayingSong = state.songs[state.currentIndex]
                state.isPlaying = true
            }else{
                state.currentIndex = state.currentIndex - 1
                state.currentPlayingSong = state.songs[state.currentIndex]
                state.isPlaying = true
            }
        },
        setAutoRepeat: (state) => {
            state.autoRepeat = !state.autoRepeat
        },
        setAutoPlay: (state) => {
            state.autoPlay = !state.autoPlay
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload
        },
        setTotalDuration: (state, action) => {
            state.totalDuration = action.payload
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
    setAutoPlay,
    setCurrentTime,
    setTotalDuration
} = playerSlice.actions