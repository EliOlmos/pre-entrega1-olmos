import React from 'react'

export const Navlink = (props) => {
  return (
    <div>
        <li className="nav-item">
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#a6be06"}}>{props.navLinkName}</button>
        </li>
    </div>
  )
}
