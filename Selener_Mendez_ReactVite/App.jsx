
import React, {useState} from 'react';
import './App.css'
import Form from './src/componentes/Form.jsx'
import ListaCitas from './src/componentes/ListaCitas.jsx'

function App() {

  const [citas, setCitas] = useState([]);

const agregarCita = (cita) => {
  setCitas([...citas, cita]);
};

const eliminarCita = (id) => {
  const nuevasCitas = citas.filter((cita) => cita.id !== id);
  setCitas(nuevasCitas);
};


  return (
    <>
    <div className="todisimo">
    <h1 className='titulo'>ADMINISTRADOR DE PACIENTES</h1>
    <div className="todo">
      

      <div className="container">
        <div className="one-half column">
          <h2>CREAR MI CITA</h2>
          <Form agregarCita={agregarCita} />
        </div>

        <div className="one-half column">
          <h2>ADMINISTRA TUS CITAS</h2>
          <ListaCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;