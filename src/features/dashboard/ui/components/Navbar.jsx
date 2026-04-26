import React from 'react'
import SearchInput from '../../../search/ui/components/SearchInput'
import { useAuth } from '../../../auth/hooks/useAuth'

const Navbar = () => {
  let { loginUser, deleteLoginUser, navigate } = useAuth()

  return (
    <div className='h-[10%] flex justify-between items-center px-8 bg-[#000000] text-white '>

      {/* Left — Logo */}
      <div className='flex items-center select-none flex-shrink-0 gap-1.5'>
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        Spotify
      </div>

      {/* Center — Home + Search */}
      <div className='flex items-center gap-2 flex-1 justify-center max-w-[520px] mx-8'>

        {/* Home Button */}
        <button onClick={() => navigate('/dashboard')} 
        className='
          w-12 h-12 flex-shrink-0
          flex items-center justify-center
          bg-[#242424] rounded-full
          hover:bg-[#2a2a2a] hover:scale-105
          active:scale-95
          transition-all duration-200
          cursor-pointer
        '>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>

        {/* Search Bar */}
        <div className='
          flex items-center gap-3
          bg-[#242424] rounded-full
          px-4 py-2.5
          flex-1
          border border-transparent
          hover:border-white/10
          focus-within:border-white/30
          focus-within:bg-[#2a2a2a]
          transition-all duration-300
        '>
          {/* Search Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>

          {/* Search Input */}
          <SearchInput placeholder="What do you want to play?" type='text' />

          {/* Divider + Browse Icon */}
          <div className='flex items-center gap-3 flex-shrink-0'>
            <div className='w-px h-5 bg-white/20'></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          </div>
        </div>

      </div>

      {/* Right — User + Logout */}
      <div className='flex items-center gap-3 flex-shrink-0'>

        {/* User Avatar + Name */}
        <div className='
          flex items-center gap-2
          bg-[#242424] hover:bg-[#2a2a2a]
          active:scale-95
          px-2 py-1 rounded-full
          transition-all duration-200
          cursor-pointer select-none
        '>
          <div className='bg-[#1ed760] w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0'>
            {loginUser.name.split('')[0].toUpperCase()}
          </div>
          <p className='text-sm font-semibold text-white pr-2'>{loginUser.name}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={deleteLoginUser}
          title="Logout"
          className='
            w-9 h-9
            flex items-center justify-center
            bg-[#242424] text-gray-400
            rounded-lg
            border border-transparent
            hover:bg-[#2a2a2a] hover:text-white hover:border-white/20
            active:scale-90 active:bg-[#1a1a1a]
            focus:outline-none focus:ring-2 focus:ring-white/20
            transition-all duration-200 ease-in-out
            cursor-pointer
          '
        >
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z" fill="currentColor" />
          </svg>
        </button>

      </div>

    </div>
  )
}

export default Navbar