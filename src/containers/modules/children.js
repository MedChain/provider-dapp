
const childFolders = (nodes) => {
  let childrenObj = {}
  Array.from(nodes).forEach(node => {
    childrenObj[node.name] = []
    let lastFolderIndex = node.name.lastIndexOf('/')
    if (lastFolderIndex !== 0) {
      let child = node.name.slice(lastFolderIndex)
      let parent = node.name.slice(0, lastFolderIndex)

      if (childrenObj[parent] && !childrenObj[parent].includes(node.name)) {
        childrenObj[parent].push(node.name)
      }
    }
  })
  return childrenObj
}

export default childFolders