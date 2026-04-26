import React from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { play, playNewSong, setSongs } from "../../../player/state/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../state/favSongSlice";
import { usePlayer } from "../../../player/hooks/usePlayer";
import { useLocation } from "react-router";

const SongCard = ({ song, index }) => {

  let dispatch = useDispatch()
  let location = useLocation()

  let { songs, searchValue, searchedSongs, favSearchedSongs } = useSelector(state => state.search)
  let { favSongs } = useSelector(state => state.favSong)
  const isFavourite = favSongs.some(elem => elem.url === song.url)

  const handleSongPlay = () => {
    let currentSongList

    if(location.pathname === '/dashboard/favouriteSongs'){
      currentSongList = searchValue ? favSearchedSongs : favSongs
    }else if(searchValue) {
      currentSongList = searchedSongs
    }else{
      currentSongList = songs
    }

    dispatch(setSongs(currentSongList))
    dispatch(playNewSong({song, index}))
  }


  return (
    <div onClick={handleSongPlay}
      className="w-64 bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition cursor-pointer group">

      {/* Thumbnail */}
      <div className="relative">
        <img
          src={song.thumbnail}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        <button onClick={(e) => {
          e.stopPropagation()
          dispatch(addToFav(song))
        }}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 hover:bg-black/80 transition-all"
        >
          {isFavourite ? (
            // Filled heart — favourite hai 
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-[#1ed760]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            // Empty heart — favourite nahi
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
            </svg>
          )}
        </button>
      </div>

      {/* Song Info */}
      <h3 className="text-white font-semibold text-lg truncate">
        {song.title}
      </h3>

      <p className="text-gray-400 text-sm truncate">
        {song.artist}
      </p>

      <p className="text-gray-500 text-xs mt-1 truncate">
        {/* {song.album} • {song.year} */}
      </p>
    </div>

  );
};

export default SongCard;