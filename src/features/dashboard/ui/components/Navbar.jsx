import React from 'react'
import SearchInput from '../../../search/ui/components/SearchInput'
import { useAuth } from '../../../auth/hooks/useAuth'


const Navbar = () => {

  let { deleteLoginUser } = useAuth()

  return (
    <div className='h-[10%] flex   justify-between items-center px-14 text-white'>

      <h1 className='uppercase tracking-wide'>Spotify</h1>

      <div className='flex gap-6 items-center'>

        <p>Search Song</p>
        <div>
          <SearchInput placeholder="Search..." type='text' />
        </div>

      </div>

      <div className='flex gap-2'>
        <label>Logout</label>
        <button onClick={deleteLoginUser}
        className='bg-gray-600 h-8 w-8 flex justify-center items-center p-2 rounded border border-gray-500 hover:bg-gray-500 active:scale-95'>
          <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z" fill="#000000" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Navbar