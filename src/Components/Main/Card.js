import React from 'react'
import Contador from '../Contador/Contador'

export const Card = () => {
  return (
    <div className="card text-center bg-dark"> 
      <img src="https://media.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/r/a/raqueta-de-tenis-head-extreme-mp-71004r235312001-1.jpg" alt="raqueta" />
      <div className="card-body text-light">
        <h4 className="card-title">Producto</h4>
        <p className="card-text">Descripcion del producto</p>
        <div>
          <Contador/>
        </div>
      </div>
      </div>
  )
}
