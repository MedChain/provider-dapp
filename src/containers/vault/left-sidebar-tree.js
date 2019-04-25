import React, { Component } from 'react'
import values from 'lodash/values'
import PropTypes from 'prop-types'
import TreeNode from './left-sidebar-tree-node'

const data = {
    id: 1,
  '/parentFolder1': {
    userId: 1,
    path: '/parentFolder1',
    type: 'folder',
    isRoot: true,
    children: ['/parentFolder1/childFolder1', '/parentFolder1/childFolder2']
  },
  '/parentFolder1/childFolder1': {
    path: '/parentFolder1/childFolder1',
    type: 'folder',
    children: ['/parentFolder1/childFolder1/readme.md']
  },
  '/parentFolder1/childFolder1/readme.md': {
    path: '/parentFolder1/childFolder1/readme.md',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/parentFolder1/childFolder2': {
    path: '/parentFolder1/childFolder2',
    type: 'folder',
    children: ['/parentFolder1/childFolder2/projects', '/parentFolder1/childFolder2/vblogs']
  },
  '/parentFolder1/childFolder2/projects': {
    path: '/parentFolder1/childFolder2/projects',
    type: 'folder',
    children: ['/parentFolder1/childFolder2/projects/treeview']
  },
  '/parentFolder1/childFolder2/projects/treeview': {
    path: '/parentFolder1/childFolder2/projects/treeview',
    type: 'folder',
    children: []
  },
  '/parentFolder1/childFolder2/vblogs': {
    path: '/parentFolder1/childFolder2/vblogs',
    type: 'folder',
    children: []
  },
  '/parentFolder2': {
    userId: 2,
    path: '/parentFolder2',
    type: 'folder',
    isRoot: true,
    children: []
  },
  '/parentFolder3': {
    userId: 3,
    path: '/parentFolder3',
    type: 'folder',
    isRoot: true,
    children: ['/parentFolder3/childFolder1', '/parentFolder3/childFolder2']
  },
  '/parentFolder3/childFolder1': {
    path: '/parentFolder3/childFolder1',
    type: 'folder',
    children: ['/parentFolder3/childFolder1/childFolder1', '/parentFolder3/childFolder1/childFolder2']
  },
  '/parentFolder3/childFolder1/childFolder1': {
    path: '/parentFolder1/childFolder1/childFolder1',
    type: 'folder',
    children: []
  },
  '/parentFolder3/childFolder1/childFolder2': {
    path: '/parentFolder1/childFolder1/childFolder2',
    type: 'folder',
    children: []
  },
  '/parentFolder3/childFolder2': {
    path: '/parentFolder3/childFolder2',
    type: 'folder',
    children: []
  },
  
  '/Archive': {
    userId: 4,
    path: '/Archive',
    type: 'folder',
    isRoot: true,
    children: ['/Archive/childFolder1', '/Archive/childFolder2', '/Archive/childFolder3', '/Archive/childFolder4', '/Archive/childFolder5', '/Archive/childFolder6']
  },
  '/Archive/childFolder1': {
    path: '/Archive/childFolder1',
    type: 'folder',
    children: []
  },
  '/Archive/childFolder2': {
    path: '/Archive/childFolder2',
    type: 'folder',
    children: []
  },
  '/Archive/childFolder3': {
    path: '/Archive/childFolder3',
    type: 'folder',
    children: []
  },
  '/Archive/childFolder4': {
    path: '/Archive/childFolder4',
    type: 'folder',
    children: []
  },
  '/Archive/childFolder5': {
    path: '/Archive/childFolder5',
    type: 'folder',
    children: []
  },
  '/Archive/childFolder6': {
    path: '/Archive/childFolder6',
    type: 'folder',
    children: []
  },
}

export default class Tree extends Component {
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

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired
}
