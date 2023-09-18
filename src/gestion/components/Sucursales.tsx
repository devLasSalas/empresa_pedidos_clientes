import React from "react"
import { Sucursale } from "../interfaces/data.interface"
import '../styles/Sucursales.css'

type props = {
    sucursales: Sucursale
}

const Sucursales: React.FC<props> = ({ sucursales }) => {

    console.log( sucursales );
    const {  direccionSucursal, nombreSucursal, clientes } = sucursales;

  return (
    <div className="sucursal">
      <ul>
        <li className="list"><span>Nombre Sucursal: <strong>{ nombreSucursal }</strong></span></li>
        <li className="list"><span>Nombre Sucursal: <strong>{ direccionSucursal }</strong></span></li>
        <li className="list-details">
        <details>
            <summary>Listado de clientes:</summary>
            <div>
              {
                clientes.map(({ nombreCliente, direccion, numeroEncomiendasEntregadas, telefono }, i ) => (
                  <div className="client" key={ i }>
                    <span>Nombre: <strong></strong>{ nombreCliente }</span>
                    <span>Dirección: <strong></strong>{ direccion }</span>
                    <span>N° Encomiendas: <strong></strong>{ numeroEncomiendasEntregadas }</span>
                    <span>Telefono: <strong></strong>{ telefono }</span>
                    <br />
                  </div>
                )) 
              }

            </div>
          </details>
        </li>
      </ul>
    
    </div>
  )
}

export default Sucursales