import { useEffect, useState } from "react"
import { allSongs } from "../../dashboard/api/songsAPI"

export let useSearch = () => {

    const [songs, setSongs] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [searchedSongs, setSearchedSongs] = useState([])

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const data = await allSongs()
                setSongs(data || [])
                setSearchedSongs(data || [])
            } catch (error) {
                console.error(error)
            }
        }
        fetchSongs()
    },[])

    useEffect(() => {
        if(!searchValue.trim()){
            setSearchedSongs(songs)
            return
        }

        const filteredSongs = songs.filter((elem) => {
            return elem.title.toLowerCase().includes(searchValue.toLowerCase()) 
        })
        setSearchedSongs(filteredSongs)

    }, [searchValue, songs])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    // let handleSearch = (e) => {
    //     let value = e.target.value
    //     setSearchValue(value)

    //     let filteredSongs = songs.filter(elem => {
    //         if (elem.title.toLowerCase().includes(value.toLowerCase())) {
    //             return elem
    //         }
    //     })

    //     setSearchedSongs(filteredSongs)
    //     console.log(searchedSongs)

    // }

    return {
        handleSearch,
        searchValue,
        searchedSongs,
    }
}