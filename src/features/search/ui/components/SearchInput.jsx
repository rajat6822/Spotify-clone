import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../../dashboard/state/searchSlice'
import { usePlayer } from '../../../player/hooks/usePlayer'

const SearchInput = ({...props}) => {

  const dispatch = useDispatch()
  let { handleSearch } = usePlayer()
  const { searchValue } = useSelector(state => state.search)

  return (
   <input
      value={searchValue}
      onChange={handleSearch}
      className='bg-transparent outline-none text-white placeholder-gray-400 text-sm w-full'
      {...props}
    />
  )
}

export default SearchInput