import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

// export const createFilter = (filter) => {
//   console.log("createFilter filter:", filter)
//   return { 
//     type: 'FILTER',
//     data: filter
//   }
// }

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    createFilter(state, action) {
      return action.payload
    }
  }  
})

export default filterSlice.reducer
export const { 
  createFilter 
} = filterSlice.actions

