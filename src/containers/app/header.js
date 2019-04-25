import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import logo from '../../assets/medchain.jpeg'

class Window extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="app-header" className="frame header">
        <Menu stackable borderless>
          <img src={logo} alt="MedChain logo" style={imgStyle} />
          <Menu.Item header as={NavLink} to="/dashboard">
            Dashboard
          </Menu.Item>
          <Menu.Item header as={NavLink} to="/vault">
            My Vault
          </Menu.Item>
          <Menu.Item header as={NavLink} to="/emr">
            EMR
          </Menu.Item>
          <Menu.Item header as={NavLink} to="/messages">
            Messages
          </Menu.Item>

          {this.props.children}

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item header as={NavLink} to="/logout" style={header}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Window

const header = {
  marginRight: '1rem'
}

const imgStyle = {
  width: '2.6rem',
  height: '2.6rem',
  margin: '.5rem 0 1rem .5rem'
}

