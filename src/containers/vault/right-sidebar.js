import React from 'react'
import {
  Divider,
  Dropdown,
  Icon,
  Label,
  List,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'

const Window = () => (
  <div className="app-right-sidebar-header" style={rightBar}>
    <h2>File Metadata</h2>
    <p>(No PII)</p>
  </div>
)

export default Window

const rightBar = {
  border: '1px solid #ccc',
}