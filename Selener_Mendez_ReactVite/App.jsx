
import React, {useState, useEffect} from 'react';
import './App.css'
import Form from './src/componentes/Form.jsx'
import ListaCitas from './src/componentes/ListaCitas.jsx'
function App() {

  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

const agregarCita = (cita) => {
  setCitas([...citas, cita]);
};

useEffect(() => {
  localStorage.setItem('citas', JSON.stringify(citas));
}, [citas]);


  return (
    <>

    <h1 className='titulo'>ADMINISTRADOR DE PACIENTES</h1>

    <div class="container">

    <div class="one-half column">
      <h2>CREAR MI CITA</h2>
    <Form  agregarCita = {agregarCita}/>
    </div>

    <div class="one-half column">
    <h2>ADMINISTRA TUS CITAS</h2>
    <ListaCitas citas={citas} />

    </div>

    </div>
  
    </>
  )
}

export default App
