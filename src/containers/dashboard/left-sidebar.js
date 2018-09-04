import React from 'react'
import { NavLink } from 'react-router-dom'

const Window = () => (
  <div className="sidebar-content">
    <ul>
      <li>
        <NavLink to={'./'}>Overview</NavLink>
      </li>
      <li>
        <NavLink to={'./reports'}>Reports</NavLink>
      </li>
      <li>
        <NavLink to={'./analytics'}>Analytics</NavLink>
      </li>
      <li>
        <NavLink to={'./export'}>Export</NavLink>
      </li>      
    </ul>
  </div>

)

export default Window
