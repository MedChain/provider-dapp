export const FILE_SELECTED = 'metadata/FILE_SELECTED'


const initialState = {
  path: "David",
}


export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

// //actions

// export const s


// //action creator
// export const selectFile = id => ({
//   type: 'SELECT_FILE',
//   id
// })


// //reducers
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'SELECT_FILE':
//       return [
//         ...state,
//         {
//           selectedFile: action.id,
//         }
//       ]
//     default:
//       return state
//   }
// }

// actions
export const fileSelected = path => {
  return { type: FILE_SELECTED, path }
}



