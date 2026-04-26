import SongCard from '../components/SongCard'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const { searchedSongs, songs, searchValue} = useSelector(state => state.search)
  
  return (
    <div className='flex flex-wrap justify-center gap-4'>{
      searchedSongs.length?
      searchValue ?
        searchedSongs.map((song, index) => {
          return <SongCard key={index} song={song} index={index}/>
        }) :
        songs.map((song, index) => {
          return <SongCard key={index} song={song} index={index}/>
        }):
        <h1>No such song is there</h1>
    }</div>
  )
}

export default HomePage