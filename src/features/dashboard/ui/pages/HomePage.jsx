import SongCard from "../components/SongCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { searchedSongs, songs, searchValue } = useSelector(
    (state) => state.search,
  );

  const displaySongs = searchValue.trim() ? searchedSongs : songs;

  return (
    <section className="flex flex-wrap justify-center gap-4 p-4">
      {displaySongs.length ? (
        displaySongs.map((song, index) => <SongCard key={index} song={song} index={index}/>)
      ) : (
        <div className="w-full text-center mt-10">
          <h1 className="text-xl md:text-2xl font-bold text-gray-300">
            No such song found 🎧
          </h1>
        </div>
      )}
    </section>
  );
};

export default HomePage;