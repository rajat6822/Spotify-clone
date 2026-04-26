import js from "@eslint/js";
import { createSlice } from "@reduxjs/toolkit";


const favSongSlice = createSlice({
    name: 'Fav song',
    initialState: {
        favSongs: JSON.parse(localStorage.getItem('fav songs')) || [],
    },
    reducers: {
        addToFav: (state, action) => {
            const favSongExists = state.favSongs.find(elem => elem.url === action.payload.url)
            if (!favSongExists) {
                let allFavSongs = [...state.favSongs, action.payload]
                localStorage.setItem('fav songs', JSON.stringify(allFavSongs))
                state.favSongs = allFavSongs
            } else {
                let filteredfavSongs = state.favSongs.filter(elem => elem.url !== action.payload.url)
                localStorage.setItem('fav songs', JSON.stringify(filteredfavSongs))
                state.favSongs = filteredfavSongs
            }
        }
    }
})

export default favSongSlice.reducer
export const { addToFav } = favSongSlice.actions
