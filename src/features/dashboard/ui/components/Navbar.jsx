import React from 'react'
import SearchInput from '../../../search/ui/components/SearchInput'
import { useAuth } from '../../../auth/hooks/useAuth'


const Navbar = () => {

    let { loginUser } = useAuth()
  

  return (
    <div className='h-[10%] flex   justify-between items-center px-14 text-white '>

      <h1 className='uppercase tracking-wide'>Spotify</h1>

      <div className='flex gap-6 items-center'>

        <p>Search Song</p>
        <div>
          <SearchInput placeholder="Search..." type='text' />
        </div>

      </div>

      <div className='flex gap-2 items-center border border-white px-4 py-2 rounded-xl bg-white/15'>
        <div className='bg-green-600 px-2 text-lg  rounded font-semibold'>{loginUser.name.split('')[0].toUpperCase()}</div>
        <p>{loginUser.name}</p>
        
      </div>

    </div>
  )
}

export default Navbar