import React from 'react'
import { useSearch } from '../../hooks/useSearch'

const SearchInput = ({...props}) => {

    let { handleSearch, searchValue, searchedSongs } = useSearch()

  return (
    <div className='w-50'>
        <input onChange={handleSearch}
        className='w-[400px] border-gray-600 border rounded-xl p-2 bg-white text-black' {...props} />
    </div>
  )
}

export default SearchInput