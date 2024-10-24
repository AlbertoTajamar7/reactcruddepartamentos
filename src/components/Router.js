import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import { MenuDepartamentos } from './MenuDepartamentos'
import HomeDepartamentos from './HomeDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'
import DetallesDepartamento from './DetallesDepartamento'
import ModificarDepartamento from './ModificarDepartamento'
import EliminarDepartamento from './EliminarDepartamento'

export default class Router extends Component {
  render() {
    function DetallesDepartamentoElement (){
      let {iddepartamento} = useParams();
      return(<DetallesDepartamento id={iddepartamento}/>)
    }
    function ModificarDepartamentoElement(){
      let {id,nombre,localidad}= useParams();
      return(<ModificarDepartamento id={id} nombre={nombre} localidad={localidad}/>)

    }
    function EliminarDepartamentoElement(){
      let {id}= useParams();
      return(<EliminarDepartamento id={id}/>)

    }
    return (
      <BrowserRouter>
      <MenuDepartamentos/>
        <Routes>
          <Route path='/' element={<HomeDepartamentos/>}></Route>
          <Route path='/insertar' element={<CreateDepartamentos/>}></Route>
          <Route path='/detalles/:iddepartamento' element={<DetallesDepartamentoElement/>}/>
          <Route path='/modificar/:id/:nombre/:localidad' element={<ModificarDepartamentoElement/>}></Route>
          <Route path='/eliminar/:id' element={<EliminarDepartamentoElement/>}></Route>
        </Routes>
      </BrowserRouter>
      
    )
  }
}