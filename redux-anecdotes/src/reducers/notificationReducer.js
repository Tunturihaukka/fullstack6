import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
  name: 'notification',
  initialState: { content: '' },
  reducers: {
    setNotification(state, action) {
      return { content: action.payload }
    }
  },
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer