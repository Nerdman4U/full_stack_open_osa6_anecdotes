import { createSlice } from '@reduxjs/toolkit'

const initialState = { timeout: 2000, message: "Uusi viesti sulle" }

const setNotification = (message, timeout) => {
  return dispatch => {
    const ms = timeout * 1000
    console.log('setNotification message:', message, 'timeout:', timeout, 'ms:', ms)
    dispatch(createNotification({timeout:ms, message:message}))
  }
}

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      console.log('createNotification action:', action)
      return action.payload
    }
  }  
})

export default notificationSlice.reducer
export const { 
  createNotification 
} = notificationSlice.actions
export {
  setNotification
}