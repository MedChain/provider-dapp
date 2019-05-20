import data from './dummyData'

// export const NODE_SELECTED = 'metadata/NODE_SELECTED'

export const NODE_SELECTED = 'NODE_SELECTED'
export const ALL_NODES_SELECTED = 'ALL_NODES_SELECTED'


const initialState = {
  node: {},
  nodes: data,
}

// reducers

export default (state = initialState, action) => {
  switch(action.type) {
    case 'NODE_SELECTED':
      return {
        ...state,
        node: action.node,
      }

    case 'ALL_NODES_SELECTED':
      return {
        ...state,
        nodes: action.nodes,
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



export const allNodesSelect = nodes => {
  return {
    type: ALL_NODES_SELECTED,
    nodes
  }
}
