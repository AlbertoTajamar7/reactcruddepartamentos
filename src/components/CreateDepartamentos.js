import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


 class CreateDepartamentos extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad= React.createRef();
    state={
        status:false
    }
    inserDepartamentos =(e)=>{
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value)
        let nombre = this.cajaNombre.current.value
        let localidad = this. cajaLocalidad.current.value
        let departamentos ={
            numero:id,
            nombre:nombre,
            localidad:localidad
        }
        let request ="api/Departamentos"
        let url = Global.apiUrlDepartamentos+request
        axios.post(url,departamentos).then(response=>{
            console.log("insertado")
            this.setState({
                status:true
            })
        })


    }
  render() {
    if (this.state.status== true) {
        return(<NavLink to="/"/>)
    }else{
        return(
            <div>
                <h1>Nuevo departamento</h1>
                <form>
                    <label>ID departamento</label>
                    <input type='text' ref={this.cajaId}/><br/>
                    <label>Nombre</label>
                    <input type='text' ref={this.cajaNombre}/><br/>
                    <label>Localidad</label>
                    <input type='text' ref={this.cajaLocalidad}/><br/>
                    <button onClick={this.inserDepartamentos}>Insertar departamento</button>
                </form>
            </div>
        )
    }
   
  }
}



export default CreateDepartamentos