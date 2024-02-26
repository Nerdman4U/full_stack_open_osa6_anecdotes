import { createSlice } from '@reduxjs/toolkit'

const initialState = "Uusi viesti sulle"

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      return action.payload
    }
  }  
})

export default notificationSlice.reducer
export const { 
  createNotification 
} = notificationSlice.actions