import React from 'react';
import { Data } from '../interfaces/data.interface';
import '../styles/JsonToHtml.css'
import Sucursales from './Sucursales';
import Pedidos from './Pedidos';

type props = {
    data: Data
}

const JsonToHtml: React.FC<props> = ({ data }) => {

    const { sucursales, empresaEntregaPedidos } = data;

  return (
    <div className='container-data'>
      <div className='content-one'>
          <h2 className='heading2'>Información de Pedidos</h2>
          <Pedidos pedidos={ empresaEntregaPedidos } />
      </div>
      <div className='content-two'>
          <h2 className='heading2'>Sucursales</h2>
          {
            sucursales.map(( sucursal, i ) => (
              <Sucursales key={ i } sucursales={ sucursal } />
            ))
          }
      </div>
    </div>
  )
}

export default JsonToHtml