import { useDispatch, useSelector } from "react-redux"
import { setAllSongs } from "../state/songsSlice"
import { playNewSong } from "../../player/state/playerSlice"

export let useDashboard = () => {
    let dispatch = useDispatch()

    return {
        dispatch
    }
}