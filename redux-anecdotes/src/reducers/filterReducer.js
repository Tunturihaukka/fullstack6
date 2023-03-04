import { createSlice } from '@reduxjs/toolkit'


const filterSlice = createSlice({
  name: 'filter',
  initialState: { content: '' },
  reducers: {
    setFilter(state, action) {
      return { content: action.payload }
    }
  },
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer