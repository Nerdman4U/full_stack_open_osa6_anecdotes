
const initialState = ""

export const createFilter = (filter) => {
  console.log("createFilter filter:", filter)
  return { 
    type: 'FILTER',
    data: filter
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data
    default:
      return state
  }
}

export default reducer

