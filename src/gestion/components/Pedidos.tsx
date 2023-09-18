import React from "react"
import { EmpresaEntregaPedidos } from "../interfaces/data.interface"
import '../styles/Pedidos.css'

type props = {
    pedidos: EmpresaEntregaPedidos
}

const Pedidos: React.FC<props> = ({ pedidos }) => {
  return (
    <div className='pedido'>
      <table border={1}>
        <tr>
          <th>Nombre Empresa</th>
          <th>Dirección</th>
          <th>Telefono</th>
        </tr>
        <tr>
          <td>{ pedidos?.nombre }</td>
          <td>{ pedidos?.direccion }</td>
          <td>{ pedidos?.telefono }</td>
        </tr>
      </table>
    </div>
  )
}

export default Pedidos