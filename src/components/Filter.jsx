import { useDispatch } from 'react-redux'
import { createFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(createFilter(value))
  }
  
  return (
    <div>
      <input placeholder="Type here to filter" onChange={handleChange} className="shadow appearance-none border border-blue-500 w-5/6 rounded py-2 px-3 mr-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
  )
}

export default Filter