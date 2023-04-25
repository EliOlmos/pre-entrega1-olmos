import React from 'react'

export const Navlink = (props) => {
  return (
    <div>
        <li className="nav-item">
          <p className="nav-link active" aria-current="page">{props.navLinkName}</p>
        </li>
    </div>
  )
}
