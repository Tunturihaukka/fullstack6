import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
  name: 'notification',
  initialState: { content: '' },
  reducers: {
    showNotification(state, action) {
      return { content: action.payload }
    }
  },
})

export const { showNotification } = notificationSlice.actions

export const setNotification = (content, seconds) => {
  return async dispatch => {
    dispatch(showNotification(content))
    setTimeout(() => {dispatch(showNotification(''))}, seconds*1000)
  }
}

export default notificationSlice.reducer