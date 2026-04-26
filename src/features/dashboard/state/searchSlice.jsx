import { createSlice } from "@reduxjs/toolkit"
import { allSongs } from "../api/songsAPI"

const searchSlice = createSlice({
    name: "search",
    initialState: {
        songs: allSongs(),
        searchValue: "",
        searchedSongs: [],
        favSearchedSongs: []
    },
    reducers: {
        setAllSongs: (state, action) => {
            state.songs = action.payload
            state.searchedSongs = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
            const value = action.payload.toLowerCase().trim()

            if (!value) {
                state.searchedSongs = state.songs
                return
            }

            state.searchedSongs = state.songs.filter(song => {
                return song?.title?.toLowerCase().includes(value)
            })

        },
        setFavSearchValue: (state, action) => {
            let {value, favSongs} = action.payload

            if(!favSongs){
                state.favSearchedSongs = []
                return
            }

            const trimmedValue = value.toLowerCase().trim()

            if(!trimmedValue) {
                state.favSearchedSongs = []
                state.searchValue = ''
                return
            }   

            state.searchValue = value
            state.favSearchedSongs = favSongs.filter(song => song?.title?.toLowerCase().includes(trimmedValue))

        }
    }
})

export const { setAllSongs, setSearchValue, setFavSearchValue } = searchSlice.actions
export default searchSlice.reducer