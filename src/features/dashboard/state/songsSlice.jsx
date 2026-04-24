import { createSlice } from "@reduxjs/toolkit"
import { allSongs } from "../api/songsAPI"

const initialState = {
    songs : allSongs(), 
    searchValue : "",
    searchedSongs : []
}

const searchSlice = createSlice({
    name : "search",
    initialState ,
    reducers : {
        setAllSongs : (state , action) => {
            state.songs = action.payload
            state.searchedSongs = action.payload
        },
        setSearchValue : (state , action) =>{
            state.searchValue = action.payload

            const value = action.payload.toLowerCase().trim()
            if(!value){
                state.searchedSongs = state.songs 
                return
            }

            state.searchedSongs = state.songs.filter(song => {
               return song?.title?.toLowerCase().includes(value)
            })

        }
    }
})

export const { setAllSongs , setSearchValue} = searchSlice.actions 
export default searchSlice.reducer