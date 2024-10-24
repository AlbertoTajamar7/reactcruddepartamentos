import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom'
import imgLoading from './../assets/images/imgLoading.png'

class DetallesDepartamento extends Component {
    state={
        departamento:null
    }
    findDepartamento =()=>{
        let request ="/api/Departamentos/"+this.props.id;
        let url = Global.apiUrlDepartamentos+request
        axios.get(url).then(response=>{
            this.setState({
                departamento:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.findDepartamento();
    }
  render() {
    return (
        <div>
            <h1>DetallesDepartamento:{this.props.id}</h1>
            <NavLink to="/">Volver a Home</NavLink>
            {
                this.state.departamento?
                (<ul>
                    <li className='list-group-item'>Numero {this.state.departamento.numero}</li>
                    <li className='list-group-item'>nombre {this.state.departamento.nombre}</li>
                    <li className='list-group-item'>localidad {this.state.departamento.localidad}</li>
                </ul>) :
                (<img src={imgLoading}/>)
            }
        </div>
    )
  }
}

export default DetallesDepartamento