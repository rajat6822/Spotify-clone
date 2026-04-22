import React from 'react'
import { allSongs } from '../../api/songsAPI'
import SongCard from '../components/SongCard'
import { useSearch } from '../../../search/hooks/useSearch'

const HomePage = () => {

  let songs = allSongs()
  let { handleSearch, searchValue, searchedSongs } = useSearch()


  return (
    <div className='flex flex-wrap justify-center gap-4'>{
      searchValue ?
        searchedSongs.map((song, idx) => {
          <SongCard key={idx} song={song} />
        }) :
        songs.map((song, idx) => {
          return <SongCard key={idx} song={song} />
        })
    }</div>
  )
}

export default HomePage