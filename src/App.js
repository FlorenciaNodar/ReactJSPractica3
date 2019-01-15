import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
class App extends Component {

  crearCita=(e)=>{
    
    console.log(e);
  }
  render() {
    return (
      <div className="container">
       <Header titulo={'Administrador de pacientes de veterinaria'}/>
        <div className="row">
        <div className="col-md-6">
          <AgregarCita crearCita={this.crearCita}/>
        </div>

        </div>
      </div>
    );
  }
}

export default App;
