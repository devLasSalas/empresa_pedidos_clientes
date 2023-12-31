import { useEffect, useState } from "react"
import JsonToHtml from "../components/JsonToHtml";
import { Data } from "../interfaces/data.interface";
import DataJSON from '../../../Data.json'

const HomePage = () => {

  const [DataGestion, setDataGestion] = useState<Data>({ empresaEntregaPedidos: {}, sucursales: [] })

  useEffect(() => {
    // fetch('http://localhost:5173/data.json')
    // .then(( response ) => response.json())
    // .then(( result ) => setDataGestion( result ))
    setDataGestion( DataJSON )
  }, [])

  return (
    <div className="container">
      <h1>Gestion de Pedidos y Sucursales</h1>
      <JsonToHtml data={ DataGestion }/>
    </div>
  )
}

export default HomePage