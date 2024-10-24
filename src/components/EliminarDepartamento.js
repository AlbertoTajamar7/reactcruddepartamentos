import { extend } from "jquery";
import React from "react";
import { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
class EliminarDepartamento extends Component{
    render(){
             let validacion = prompt("estas seguro quieres eliminar el departamento" + this.props.id)
             if (validacion == "si") {
                deleteDepartamento(this.props.id)
                
             }
             function deleteDepartamento(id){
                    let request ="/api/Departamentos/"+id
                    let url = Global.apiUrlDepartamentos+request
                    axios.delete(url).then(response=>{
                        alert("BORRADO")
                    
                    })
                    return(<NavLink to="/"/>)
                }
              
        return(
            <div>
                <h1>estas seguro que quieres</h1>
            </div>
        )
    }

}export default EliminarDepartamento