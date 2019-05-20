import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeNode from './left-sidebar-tree-node'


export default class Tree extends Component {

  getChildNodes = node => {
    const { nodes } = this.props
    if (!node.children) return []
    return node.children.map(path => nodes[path])
  }

  onToggle = node => {
    const { nodes } = this.props
    nodes[node.path].isOpen = !node.isOpen
    this.setState({ nodes })
  }

  onNodeSelect = node => {
    const { onSelect } = this.props
    onSelect(node)
  }

  render() {
    console.log("THIS.PROPS sidebar tree: ", this.props)
    const rootNodes = this.props.rootNodes
    return (
      <div>
        {rootNodes.map(node => (
          <TreeNode
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
