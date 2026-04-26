  import React from 'react'
  import { usePlayer } from '../../hooks/usePlayer'
  import { useSelector } from 'react-redux'
  import { nextSong, prevSong, setAutoRepeat, setAutoPlay } from '../../state/playerSlice'

  const Player = () => {

    let { togglePlayAndPause, dispatch, totalDuration, currentTime, formatTime, handleSongProgress } = usePlayer()
    let { isPlaying, currentPlayingSong,  autoRepeat, autoPlay } = useSelector((store) => store.player)


    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-6 py-3 z-50">
        <div className="flex items-center justify-between gap-4">

          {/* Left — Song Info */}
          <div className="flex items-center gap-3 w-64">
            {/* Album Art */}
            <div className="w-14 h-14 bg-[#2a2a2a] rounded-md flex-shrink-0 flex items-center justify-center">
              {
                currentPlayingSong ?
                  <img src={ currentPlayingSong.thumbnail } alt="" /> :
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#535353]">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
              }
            </div>

            {/* Title & Artist */}
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">
                {
                  currentPlayingSong?
                  currentPlayingSong.title:
                  'Song Name'
                }
              </p>
              <p className="text-gray-400 text-xs truncate">
                {
                  currentPlayingSong?
                  currentPlayingSong.artist:
                  'Artist Name'
                }
              </p>
            </div>
          </div>

          {/* Center — Controls + Progress */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">

            {/* Buttons */}
            <div className="flex items-center gap-6">

              {/* Autoplay */}
              <button onClick={() => dispatch(setAutoPlay()) } 
              className={`text-gray-400 hover:text-white transition-colors
                ${autoPlay? 'text-white/90 font-extrabold' : ''}
              `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.987 3.24L5.571 1.824 1.395 6l4.176 4.176 1.416-1.416L4.227 6l2.76-2.76zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm-1-9v4l3.5 2.1.75-1.23-3-1.87V9H11z" />
                </svg>
              </button>

              {/* Previous */}
              <button onClick={() => dispatch(prevSong()) }
              className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                </svg>
              </button>

              {/* Play */}
              <button onClick={() => togglePlayAndPause() }
                className="bg-white hover:scale-105 text-black rounded-full w-10 h-10 flex items-center justify-center transition-all">
                {!isPlaying ?
                  (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>) :
                  (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>)
                }
              </button>

              {/* Next */}
              <button onClick={() => dispatch(nextSong()) }
              className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zm2-8.14 4.96 2.64L8 15.14V9.86zM16 6h2v12h-2z" />
                </svg>
              </button>

              {/* Repeat */}
              <button onClick={() => dispatch(setAutoRepeat())}
              className={`text-gray-400 hover:text-white transition-colors 
                ${autoRepeat? 'text-white/90 font-extrabold' : ''}
              `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
                </svg>
              </button>

            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-gray-400 w-8 text-right">{formatTime(currentTime)}</span>
              <input 
              type="range" 
              className="flex-1 h-1 bg-[#4a4a4a] rounded-full cursor-pointer"
              min={0}
              max={totalDuration || 0}
              value={currentTime}
              onChange={handleSongProgress}
              />
              <span className="text-xs text-gray-400 w-8">{
                formatTime(totalDuration)
                }</span>
            </div>

          </div>

          <div className='w-70'></div>

        </div>
      </div >
    )
  }

  export default Player


