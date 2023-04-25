import React from 'react'
import { Cartwidget } from './Cartwidget';
import { Navlink } from './Navlink'

export const Navbar = () => {
  const linkText= ["Inicio", "Conocenos", "Productos", "Contacto"];
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <img width="100" height="75" src="https://www.opencup.com.ar/img/logo2.png" alt="logo"/>
    <p className="navbar-brand" href="#">Tienda on line</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {linkText.map((element)=>(
            <Navlink navLinkName={element}/>
        ))}
        
      </ul>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Buscar</button>
      </form>
      <Cartwidget/>
    </div>
  </div>
</nav>
    </div>
  )
}
