import React, { Component } from "react"
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";

class ModificarDepartamento extends Component{
    cajaId = React.createRef.value;
    cajaNombre = React.createRef.value;
    cajaLocalidad = React.createRef.value;

    updateDepartamento=(e)=>{
        e.preventDefault();
        let id = this.cajaId.current.value
        let nombre = this.cajaNombre.current.value
        let localidad = this.cajaLocalidad.current.value
        let departamento ={
            numero:id,
            nombre:nombre,
            localidad:localidad
        }
       
        let request="/api/Departamentos"
        let url = Global.apiUrlDepartamentos+request
        axios.put(url,departamento).then(response=>{
            this.setState({
                departamento:response.data,
                status:true
            })
        })
    }
     state = {
            status:false
        }

    render(){
        if (this.state.status) {
            return <Navigate to="/" />;
        }
        return(
            <div>
                <h1>Modificar Departamento</h1>
                <navigate to="/">volver a index</navigate>
                <form>
                    <label>ID</label>
                    <input type="text" ref={this.cajaId} value={this.props.id}/><br/>
                    <label>Nombre</label>
                    <input type="text" ref={this.cajaNombre} value={this.props.nombre}/><br/>
                    <label>Localidad</label>
                    <input type="text" ref={this.cajaLocalidad} value={this.props.localidad}/><br/>
                    <button onClick={this.ModificarDepartamento}>Modificar</button>

                </form>
            </div>
        )
    }

}
export default ModificarDepartamento