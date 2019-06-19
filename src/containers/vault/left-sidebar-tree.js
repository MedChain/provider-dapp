import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeNode from './left-sidebar-tree-node'


export default class Tree extends Component {

  getChildNodes = node => {
    const { children } = this.props
    if (children[node.name] === []) return []
    return children[node.name]
  }

  onToggle = node => {
    const { nodes, onToggleSelect } = this.props
    const foundNode = nodes.find(folder => folder.name === node.name)
    foundNode.isOpen = !node.isOpen
    onToggleSelect(foundNode)
  }

  onNodeSelect = node => {
    const { onSelect } = this.props
    onSelect(node)
  }

  render() {
    const { rootNodes, nodes } = this.props
   
    return (
      <div>
        {rootNodes.map(node => (
          <TreeNode
            key={node.name}
            nodes={nodes}
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired
}
