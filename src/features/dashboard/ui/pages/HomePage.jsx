import SongCard from '../components/SongCard'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const { searchedSongs, songs, searchValue} = useSelector(state => state.search)
  return (
    <div className='flex flex-wrap justify-center gap-4'>{
      searchValue ?
        searchedSongs.map((song, idx) => {
          return <SongCard key={idx} song={song} />
        }) :
        songs.map((song, idx) => {
          return <SongCard key={idx} song={song} />
        })
    }</div>
  )
}

export default HomePage