import { createSlice } from '@reduxjs/toolkit'

const initialState = { timeout: 2000, message: "Uusi viesti sulle", rotate: 0 }

const randomRotate = () => {
  const values = [0,1,2,3,6,12,45,90,180]
  return values[Math.floor(Math.random()*values.length)]
}

const setNotification = (message, timeout) => {
  return dispatch => {
    const ms = timeout * 1000
    const rotate = randomRotate()
    console.log('setNotification message:', message, 'timeout:', timeout, 'ms:', ms)
    dispatch(createNotification({timeout: ms, message: message, rotate: rotate}))
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