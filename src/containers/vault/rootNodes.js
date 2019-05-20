import values from 'lodash/values'

const rootNodes = (nodes) => values(nodes).filter(node => node.isRoot === true)

export default rootNodes