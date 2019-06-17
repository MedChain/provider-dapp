import values from 'lodash/values'

// const rootNodes = (nodes) => values(nodes).filter(node => node.isRoot === true)

const rootNodes = (nodes) => {
  // console.log("rootNODES: ", values(nodes).filter(node => node.name.split('/').length === 2))
  return values(nodes).filter(node => node.name.split('/').length === 2)
}

export default rootNodes