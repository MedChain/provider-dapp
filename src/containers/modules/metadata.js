import childFolders from './children'

// import data from './dummyData'

// export const NODE_SELECTED = 'metadata/NODE_SELECTED'

export const NODE_SELECTED = 'NODE_SELECTED'
export const MAIN_NODE_SELECTED = 'MAIN_NODE_SELECTED'
export const ALL_NODES_SELECTED = 'ALL_NODES_SELECTED'
export const CHILDREN_SELECTED = 'CHILDREN_SELECTED'
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED'
export const FILES_SELECTED = 'FILES_SELECTED'


const apiURL = 'http://localhost:3000/vault'

const initialState = {
  node: {},
  mainNode: {},
  nodes: {},
  children: {},
  files: []
}

function handleErrors(response) {
  if (!response.ok) {
    console.log('ERROR', response)
    throw Error(response.statusText)
  }
  return response
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
    
    case 'CHILDREN_SELECTED':
      return {
        ...state,
        children: action.children,
      }

    case 'TOGGLE_SELECTED':
      return {
        ...state,
        node: action.node
      }

    case 'FILES_SELECTED':
      return {
        ...state,
        files: action.files,
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

export const toggleSelect = node => {
  return {
    type: TOGGLE_SELECTED,
    node
  }
}

//mode cors, had to make change to api, add to app.get:  res.setHeader('Access-Control-Allow-Origin', '*');

export const allNodesSelect = () => {
  return dispatch => {
    return fetch(apiURL, {
      method: 'GET',
      mode: 'cors'
    })
      .then(handleErrors)
      .then(response => {
        // console.log('RESPONSE', response)
        return response.json()})
      .then(nodes => {
          // console.log('ALL NODES SELECT', nodes)
          dispatch({
            type: ALL_NODES_SELECTED,
            nodes: nodes.map(node => {
              return { 
                ...node,
                type: "folder"
              }
            })
          })
          dispatch({
            type: CHILDREN_SELECTED,
            children: childFolders(nodes)
          })
        }
      ) 
  }
}

export const filesSelect = (path) => {
  return dispatch => {
    return fetch(apiURL + path, {
      method: 'GET',
      mode: 'cors'
    })
    .then(handleErrors)
    .then(response => {
      return response.json()
    })
    .then(files => {
      dispatch({
        type: FILES_SELECTED,
        files
      })
    })
  }
}