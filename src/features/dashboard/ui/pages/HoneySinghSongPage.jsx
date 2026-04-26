import React from 'react'
import { useSelector } from 'react-redux'
import SongCard from '../components/SongCard'

const HoneySinghSongPage = () => {

const { songs } = useSelector(state => state.search)
const honeySinghSong = songs.filter(elem => elem.artist === 'Yo Yo Honey Singh ')

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {
        honeySinghSong.map((song, index) =>  <SongCard key={index} song={song} index={index} />)
      }
    </div>
  )
}

export default HoneySinghSongPage