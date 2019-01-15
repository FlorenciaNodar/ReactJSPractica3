import React, { Component } from 'react';   
import Cita from './Cita';

class ListaCitas extends Component {
    render() { 
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length == 0 ? 'No hay Citas' : "Administra tus citas aquí";
        console.log(Object.keys(citas).length);

        return ( 
            <div className="card mt-5">
                <div className="card-body">
                <h2 className="card-tittle text-center">{mensaje}</h2>
                <div className="lista-citas">
                    <Cita />
                </div>
                </div>
            </div>
         );
    }
}
 
export default ListaCitas;