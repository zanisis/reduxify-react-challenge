const getHero = (data)=>{
  return data
}

const addHero = (state, data)=>{
  data.ID = state.length + 1
  return [...state, data]
}

const initialState = []
const heroReducer = (state=initialState, action)=>{
  switch (action.type) {
    case 'FETCH_HERO': return getHero(action.payload)
    case 'ADD_HERO': return addHero(state ,action.payload)
    default: return state
  }
}

export default heroReducer