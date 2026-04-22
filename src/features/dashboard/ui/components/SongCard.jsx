import React from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { play, playNewSong } from "../../../player/state/playerSlice";

const SongCard = ({ song }) => {

    let { dispatch } = useDashboard()
    
  return (
    <div className="w-64 bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition cursor-pointer group">
      
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        {/* Play Button (hover) */}
        <button onClick={() => dispatch(playNewSong(song))}
        className="absolute bottom-4 right-4 bg-[#1DB954] p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
          ▶
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
        {song.album} • {song.year}
      </p>
    </div>
  );
};

export default SongCard;