import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../../dashboard/state/songsSlice'

const SearchInput = ({...props}) => {

  const dispatch = useDispatch()

  return (
    <div className='w-50'>
        <input onChange={(e)=> dispatch(setSearchValue(e.target.value))}
        className='w-[400px] border-gray-600 border rounded-xl p-2 bg-white text-black' {...props} />
    </div>
  )
}

export default SearchInput