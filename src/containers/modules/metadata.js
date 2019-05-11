// export const NODE_SELECTED = 'metadata/NODE_SELECTED'

export const NODE_SELECTED = 'NODE_SELECTED'


const initialState = {
  node: {},
}

// reducers

export default (state = initialState, action) => {
  switch(action.type) {
    case 'NODE_SELECTED':
      return {
        ...state,
        node: action.node,
      }

    default:
      return state
  }
}


// action creators

export const nodeSelect = node => {
  return { 
    type: NODE_SELECTED, 
    node 
  }
}



