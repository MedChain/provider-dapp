import React, { Component } from 'react'
import values from 'lodash/values'
import PropTypes from 'prop-types'
import TreeNode from './archive-tree-node'

const data = {
  id: 1,
    '/Archive': {
      userId: 1,
      path: '/Archive',
      type: 'folder',
      isRoot: true,
      children: ['/Archive/childFolder1', '/Archive/childFolder2', '/Archive/childFolder3', '/Archive/childFolder4', '/Archive/childFolder5', '/Archive/childFolder6']
    },
      '/Archive/childFolder1': {
        folderId: 1,
        path: '/Archive/childFolder1',
        type: 'folder',
        children: []
      },
      '/Archive/childFolder2': {
        folderId: 2,
        path: '/Archive/childFolder2',
        type: 'folder',
        children: []
      },
      '/Archive/childFolder3': {
        folderId: 3,
        path: '/Archive/childFolder3',
        type: 'folder',
        children: []
      },
      '/Archive/childFolder4': {
        folderId: 4,
        path: '/Archive/childFolder4',
        type: 'folder',
        children: []
      },
      '/Archive/childFolder5': {
        folderId: 5,
        path: '/Archive/childFolder5',
        type: 'folder',
        children: []
      },
      '/Archive/childFolder6': {
        folderId: 6,
        path: '/Archive/childFolder6',
        type: 'folder',
        children: []
      },
}

export default class ArchiveTree extends Component {
  state = {
    nodes: data
  }

  componentDidMount = () => {
    this.getRootNodes()
  }

  getRootNodes = () => {
    const { nodes } = this.state
    return values(nodes).filter(node => node.isRoot === true)
  }

  getChildNodes = node => {
    const { nodes } = this.state
    if (!node.children) return []
    return node.children.map(path => nodes[path])
  }

  onToggle = node => {
    const { nodes } = this.state
    nodes[node.path].isOpen = !node.isOpen
    this.setState({ nodes })
  }

  onNodeSelect = node => {
    const { onSelect } = this.props
    onSelect(node)
  }

  render() {
    const rootNodes = this.getRootNodes()
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

ArchiveTree.propTypes = {
  onSelect: PropTypes.func.isRequired
}
