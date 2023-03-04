import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
  name: 'notification',
  initialState: { content: 'Test notification' },
  reducers: {
    setNotification(state) {
      return state
    }
  },
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer