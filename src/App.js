import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';
class App extends Component {

  state = {
    citas:[]
  }
  crearCita=(nuevaCita)=>{
    const citas = [...this.state.citas,nuevaCita]

    console.log(citas);

    this.setState({
      citas 
    });//reeinscribe la propiedad del state, no borra la cita anterior, sino que hace una copia como vemos arriba y agrega otra.
  }
  render() {
    return (
      <div className="container">
       <Header titulo={'Administrador de pacientes de veterinaria'}/>
        <div className="row">
        <div className="col-md-6">
          <AgregarCita crearCita={this.crearCita}/>
        </div>
        <div className="col-md-6">
          <ListaCitas citas={this.state.citas}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
