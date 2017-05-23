const getHero = (state, data)=>{
  let newData = state
  Object.keys(data).map(function(key, index) {
    return newData.push(data[key]);
  });
  return newData
}

const addHero = (state, data)=>{
  data.ID = state.length + 1
  return [...state, data]
}

const heroReducer = (state=[], action)=>{
  switch (action.type) {
    case 'FETCH_HERO': return getHero(state ,action.payload)
    case 'ADD_HERO': return addHero(state ,action.payload)
    default: return state

  }
}

export default heroReducer