import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../../dashboard/state/searchSlice'
import { usePlayer } from '../../../player/hooks/usePlayer'

const SearchInput = ({...props}) => {

  const dispatch = useDispatch()
  let { handleSearch } = usePlayer()
  const { searchValue } = useSelector(state => state.search)

  return (
    <div className='w-50'>
        <input 
        value={searchValue}
        onChange={handleSearch}
        className='w-[400px] border-gray-600 border rounded-xl p-2 bg-white text-black' {...props} />
    </div>
  )
}

export default SearchInput