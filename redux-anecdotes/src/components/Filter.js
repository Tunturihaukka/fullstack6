import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = ( event ) => {
    event.preventDefault()
    const content = event.target.value
    dispatch(setFilter(content))

  }
  const style = {
    marginBottom: 10
  }


  return (
    <div style={style}>
        filter <input onChange={handleChange} />
    </div>
  )
}

export const setFilter = ( content ) => {
  return {
    type: 'SET_FILTER',
    payload: {
      content
    }
  }
}

export default Filter