
import React from 'react'
import './App.css'
import Form from './src/componentes/Form.jsx'
import Cita from './src/componentes/Cita.jsx'
function App() {
  return (
    <>

    <h1 classname='titulo'>ADMINISTRADOR DE PACIENTES</h1>

    <div class="container">

    <div class="one-half column">
      <h2>CREAR MI CITA</h2>
    <Form/>
    </div>

    <div class="one-half column">
    <h2>ADMINISTRA TUS CITAS</h2>
    <Cita/>
    </div>

    </div>
  
    </>
  )
}

export default App
