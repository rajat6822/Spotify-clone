import { useState } from "react"
import { allSongs } from "../../dashboard/api/songsAPI"

export let useSearch = () => {

    let songs = allSongs()

    const [searchValue, setSearchValue] = useState(null)
    const [searchedSongs, setSearchedSongs] = useState([])

    let timer;

    let handleSearch = (e) => {
        let value = e.target.value
        clearTimeout(timer)

        timer = setTimeout(() => {
            setSearchValue(value)

            let filteredSongs = songs.filter(elem => {
                if(elem.title.toLowerCase().includes(value.toLowerCase()) ){
                    return elem
                }
            })

            setSearchedSongs(prev => [...prev, filteredSongs])
        }, 800);

    }

    return {
        handleSearch,
        searchValue,
        searchedSongs,
    }
}