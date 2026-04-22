import React, { useEffect } from 'react'
import { allSongs } from '../../api/songsAPI'
import SongCard from '../components/SongCard'
import { useSearch } from '../../../search/hooks/useSearch'

const HomePage = () => {

  let songs = allSongs()
  let { handleSearch, searchValue, searchedSongs } = useSearch()
  
  console.log(searchValue)

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {console.log(searchValue)}
      {console.log(searchedSongs)}
      {
        searchValue ?
          searchedSongs.map((song, idx) => {
            <SongCard key={idx} song={song} />
          }) :
          songs.map((song, idx) => {
            return <SongCard key={idx} song={song} />
          })
      }
    </div>
  )
}

export default HomePage