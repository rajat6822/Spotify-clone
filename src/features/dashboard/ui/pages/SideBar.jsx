import React from 'react'
import { useAuth } from '../../../auth/hooks/useAuth'

const SideBar = () => {

  let { deleteLoginUser, loginUser, navigate, location, handleNavigate } = useAuth()


    return (
        <aside className='flex flex-col h-full justify-between'>

            <div className='h-[10%] flex flex-col justify-between mt-5 gap-3'>
                <h1 onClick={() => handleNavigate('/dashboard')}
                className={`bg-[#342f2f] py-2 px-5 rounded-xl 
                    ${location.pathname === '/dashboard'?
                        'border-white border bg-green-900':
                        ''
                    }
                `}>All Songs</h1>

                <h1 onClick={() => handleNavigate('/dashboard/favouriteSongs')}
                className={`bg-[#342f2f] py-2 px-5 rounded-xl 
                    ${location.pathname === '/dashboard/favouriteSongs'?
                        'border-white border bg-green-900': 
                        ''
                    }
                `}>Favourite Songs</h1>
            </div>

            <button onClick={deleteLoginUser}
            className='bg-green-600 font-semibold p-2 rounded-xl mb-4 cursor-pointer flex justify-center gap-2 items-center hover:bg-gray-600 active:scale-95'>
                Logout
                <svg width="20px" height="18px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z" fill="#000000" />
                </svg>
            </button>

        </aside>
    )
}

export default SideBar