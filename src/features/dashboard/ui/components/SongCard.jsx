import React from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { play, playNewSong, setSongs } from "../../../player/state/playerSlice";
import { useSelector } from "react-redux";

const SongCard = ({ song, idx }) => {

    let { dispatch } = useDashboard()

    let {songs, searchValue, searchedSongs} = useSelector(state => state.search)

    let handlePlay = () => {
        let currentSongList = searchValue? searchedSongs : songs
        dispatch(setSongs(currentSongList))
        dispatch(playNewSong({song: song, index: idx}))
        console.log('Song data:', song)
        console.log('Song URL:', song.url)
    }
    
  return (
    <div onClick={handlePlay}
    className="w-64 bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition cursor-pointer group">
      
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

      </div>

      {/* Song Info */}
      <h3 className="text-white font-semibold text-lg truncate">
        {song.title}
      </h3>

      <p className="text-gray-400 text-sm truncate">
        {song.artist}
      </p>

      <p className="text-gray-500 text-xs mt-1 truncate">
        {song.album} • {song.year}
      </p>
    </div>

  );
};

export default SongCard;