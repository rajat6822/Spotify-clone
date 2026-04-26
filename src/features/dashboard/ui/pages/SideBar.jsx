import React from 'react'
import { useAuth } from '../../../auth/hooks/useAuth'

const SideBar = () => {

  let { navigate, location, handleNavigate } = useAuth()

  return (
    <aside className='flex flex-col h-full bg-[#121212] py-6 px-3 gap-3 w-64'>

      

      {/* Divider */}
      <div className='h-px bg-white/5 mx-2'></div>

      {/* Nav Items */}
      <div className='flex flex-col gap-1 mt-1'>

        {/* Your Library */}
        <div
          onClick={() => handleNavigate('/dashboard')}
          className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-200 group active:scale-95
            ${location.pathname === '/dashboard'
              ? 'bg-[#242424] text-white'
              : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
        >
          <div className={`flex-shrink-0 transition-colors duration-200
            ${location.pathname === '/dashboard'
              ? 'text-[#1ed760]'
              : 'text-gray-400 group-hover:text-[#1ed760]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 7H9V7h8v2zm-3 4H9v-2h5v2zm3-8H9V3h8v2z"/>
            </svg>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Your Library</span>
            <span className='text-xs text-gray-500 group-hover:text-gray-400 transition-colors'>All songs</span>
          </div>
          {location.pathname === '/dashboard' && (
            <div className='ml-auto w-1 h-6 bg-[#1ed760] rounded-full'></div>
          )}
        </div>

        {/* Liked Songs */}
        <div
          onClick={() => handleNavigate('/dashboard/favouriteSongs')}
          className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-200 group active:scale-95
            ${location.pathname === '/dashboard/favouriteSongs'
              ? 'bg-[#242424] text-white'
              : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
        >
          <div className={`flex-shrink-0 transition-colors duration-200
            ${location.pathname === '/dashboard/favouriteSongs'
              ? 'text-[#1ed760]'
              : 'text-gray-400 group-hover:text-[#1ed760]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Liked Songs</span>
            <span className='text-xs text-gray-500 group-hover:text-gray-400 transition-colors'>Your favourites</span>
          </div>
          {location.pathname === '/dashboard/favouriteSongs' && (
            <div className='ml-auto w-1 h-6 bg-[#1ed760] rounded-full'></div>
          )}
        </div>

        {/* Yo Yo Honey Singh */}
        <div
          onClick={() => handleNavigate('/dashboard/honeySinghSongs')}
          className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-200 group active:scale-95
            ${location.pathname === '/dashboard/honeySinghSongs'
              ? 'bg-[#242424] text-white'
              : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
        >
          <div className={`flex-shrink-0 transition-colors duration-200
            ${location.pathname === '/dashboard/honeySinghSongs'
              ? 'text-[#1ed760]'
              : 'text-gray-400 group-hover:text-[#1ed760]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Yo Yo Honey Singh</span>
            <span className='text-xs text-gray-500 group-hover:text-gray-400 transition-colors'>Artist playlist</span>
          </div>
          {location.pathname === '/dashboard/honeySinghSongs' && (
            <div className='ml-auto w-1 h-6 bg-[#1ed760] rounded-full'></div>
          )}
        </div>

      </div>

    </aside>
  )
}

export default SideBar