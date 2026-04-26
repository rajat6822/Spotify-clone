import React from 'react'
import SongCard from '../components/SongCard'
import { useSelector } from 'react-redux'

const FavouriteSongsPage = () => {

  // let favSongs  = JSON.parse(localStorage.getItem('fav songs'))
  let { favSongs } = useSelector(state => state.favSong)
  let { favSearchedSongs, searchValue } = useSelector(state => state.search)
  
  const displaySongs = searchValue? favSearchedSongs : favSongs


  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {
        displaySongs.length ?
          displaySongs.map((song, index) => {
            return <SongCard key={index} song={song} index={index} />
          }) :
          <h1>{
            searchValue?
            'No songs found':
            'No Favourite song added'
          }</h1>

      }
    </div>
  )
}

export default FavouriteSongsPage