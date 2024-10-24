import React, { Component } from 'react'
import imgLoading from './../assets/images/imgLoading.png'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
 class HomeDepartamentos extends Component {
    state ={
        status:true,
        departamentos: []
    }
loadDepartamentos=()=>{
    let request ="api/Departamentos"
    let url = Global.apiUrlDepartamentos+request
    console.log(url)
    axios.get(url).then(response=>{
        this.setState({
            departamentos:response.data
        })
        console.log(response.data)
    })
}
deleteDepartamento=(id)=>{
    let request ="/api/Departamentos/"+id
    let url = Global.apiUrlDepartamentos+request
    axios.delete(url).then(response=>{
        console.log("BORRADO")
        this.loadDepartamentos();
    })
    
}
componentDidMount=()=>{
   this.loadDepartamentos();
}
  render() {
    if (this.status == false) {
        return(<img src={imgLoading}/>)
    }else{
        return(
            <div>
               <h1>Home Departamentos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID Departamento</th>
                        <th>Nombre</th>
                        <th>Localidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.departamentos.map((departamento,index)=>{
                            return(
                                  <tr key={index}>
                                    {console.log(departamento.nombre)}
                                    <td>{departamento.numero}</td>
                                    <td>{departamento.nombre}</td>
                                    <td>{departamento.localidad}</td>
                                    <td>
                                        <button onClick={()=>{
                                            this.deleteDepartamento(departamento.numero)
                                        }}>Eliminar</button>
                                        <NavLink to={"/detalles/"+departamento.numero} className="btn btn-success">Detalles</NavLink>
                                        <NavLink to={"/modificar/"+departamento.numero+"/"+departamento.nombre+"/"+departamento.localidad} className="btn btn-success">Modificar</NavLink>
                                        <NavLink to={"/eliminar/"+departamento.numero} className="btn btn-success">Eliminar</NavLink>
                                    </td>
                                </tr>
                            )
                          

                        })
                    }
                </tbody>
            </table>
      
            </div>
            
      ) }
  }
} export default HomeDepartamentos


