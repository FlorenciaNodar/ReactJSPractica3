import React, { Component } from 'react';

class AgregarCita extends Component {

    //Refs
    nombreMascotaRef=React.createRef();
    propietarioRef=React.createRef();
    fechaRef=React.createRef();
    horaRef=React.createRef();
    sintomasRef=React.createRef();

    state = {  }
    crearNuevaCita=(e)=>{
        e.preventDefault();
        console.log(this.nombreMascotaRef.current.value);
        console.log(this.propietarioRef.current.value);
        console.log(this.fechaRef.current.value);
        console.log(this.horaRef.current.value);
        console.log(this.sintomasRef.current.value);
        this.props.crearCita();
    }
    render() { 
        return (  
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">Agregar las Citas aquí</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" ref={this.nombreMascotaRef} placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" ref={this.propietarioRef} placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.fechaRef} className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" ref={this.horaRef} className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                 </div>
            </div>
        );
    }
}
 
export default AgregarCita;
