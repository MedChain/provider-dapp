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
    const { nodes } = this.props
    console.log("find: ", nodes.find(folder => folder.name === node.name))
    nodes.find(folder => folder.name === node.name).isOpen = !node.isOpen
    // nodes[node.name].isOpen = !node.isOpen
    this.setState({ nodes })

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
