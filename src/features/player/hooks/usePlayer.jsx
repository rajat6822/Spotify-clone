import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextSong, pause, play, prevSong } from "../state/playerSlice"

export let usePlayer = () => {

    let dispatch = useDispatch()

    let audioRef = useRef(new Audio())

    let  {currentPlayingSong, isPlaying, autoPlay, autoRepeat} = useSelector((store) => store.player)

    useEffect(() => {

        if(!currentPlayingSong) return

        audioRef.current.src = currentPlayingSong.url
        audioRef.current.play()

    },[currentPlayingSong])

    useEffect(() => {

        if(!currentPlayingSong) return

        if(isPlaying){
            audioRef.current.play()
        }else{
            audioRef.current.pause()
        }
    },[isPlaying])

    useEffect(() => {

        let audio = audioRef.current

        let handleSongEnd = () => {
            if(autoRepeat){
                audio.currentTime = 0
            }
            else if(autoPlay){
                dispatch(nextSong())
            }
            else{
                dispatch(pause())
            }
        }

        audio.addEventListener('ended', handleSongEnd)

        return () => audio.removeEventListener('ended', handleSongEnd)

    },[autoPlay, autoRepeat])

    let togglePlayAndPause = () =>{
        if(isPlaying){
            dispatch(pause())
        }else{
            dispatch(play())
        }
    }

    return {
        togglePlayAndPause,
        dispatch
    }
     
} 