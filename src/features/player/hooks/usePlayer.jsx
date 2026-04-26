import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextSong, pause, play, playNewSong, prevSong, setAutoPlay, setAutoRepeat, setCurrentTime, setSongs, setTotalDuration } from "../state/playerSlice"
import { useLocation } from "react-router"
import { setFavSearchValue, setSearchValue } from "../../dashboard/state/searchSlice"

const audioRef = new Audio()

export let usePlayer = () => {

    let location = useLocation()
    let dispatch = useDispatch()

    let { currentPlayingSong, isPlaying, autoPlay, autoRepeat, currentTime, totalDuration} = useSelector((store) => store.player)
    let { songs, searchValue, searchedSongs, favSearchedSongs } = useSelector(state => state.search)
    let { favSongs } = useSelector(state => state.favSong)

    const formatTime = (sec) => {
        if (!sec) return '0:00'
        const m = Math.floor(sec / 60)
        const s = Math.floor(sec % 60)
        return `${m}:${s.toString().padStart(2, '0')}`
    }
    const handleSongProgress = (e) => {
        audioRef.currentTime = e.target.value
        setCurrentTime(Number(e.target.value))
    }

    const handleSearch = (e) => {
        let value = e.target.value

        if(location.pathname === '/dashboard/favouriteSongs'){
            dispatch(setFavSearchValue({value, favSongs}))
        }else{
            dispatch(setSearchValue(value))
        }

    }

    useEffect(() => {

        if (!currentPlayingSong) return

        audioRef.src = currentPlayingSong.url
        audioRef.load()

        audioRef.ondurationchange = () => {
            dispatch(setTotalDuration(audioRef.duration))
        }
        audioRef.ontimeupdate = () => {
            dispatch(setCurrentTime(audioRef.currentTime))
        }

        audioRef.play().catch(err => {
            if(err.name === 'AbortError') return
            console.error(err)
        })


    }, [currentPlayingSong])

    useEffect(() => {

        let handleSongEnd = () => {
            if (autoRepeat) {
                audioRef.currentTime = 0
                audioRef.play()
            }
            else if (autoPlay) {
                dispatch(nextSong())
            }
            else {
                dispatch(pause())
            }
        }

        audioRef.addEventListener('ended', handleSongEnd)

        return () => audioRef.removeEventListener('ended', handleSongEnd)

    }, [autoPlay, autoRepeat])

    let togglePlayAndPause = () => {
        if (isPlaying) {
            dispatch(pause())
            audioRef.pause()
        } else {
            dispatch(play())
            audioRef.play()
        }
    }

    return {
        togglePlayAndPause,
        dispatch,
        totalDuration,
        currentTime,
        formatTime,
        handleSongProgress,
        handleSearch,
    }

} 