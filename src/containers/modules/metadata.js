import data from './dummyData'

// export const NODE_SELECTED = 'metadata/NODE_SELECTED'

export const NODE_SELECTED = 'NODE_SELECTED'
export const MAIN_NODE_SELECTED = 'MAIN_NODE_SELECTED'
export const ALL_NODES_SELECTED = 'ALL_NODES_SELECTED'


const initialState = {
  node: {},
  mainNode: {},
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

    case 'MAIN_NODE_SELECTED':
      return {
        ...state,
        mainNode: action.mainNode,
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

export const mainNodeSelect = mainNode => {
  return {
    type: MAIN_NODE_SELECTED,
    mainNode
  }
}

export const allNodesSelect = nodes => {
  return {
    type: ALL_NODES_SELECTED,
    nodes
  }
}
