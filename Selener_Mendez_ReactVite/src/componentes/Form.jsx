import './Form.css'
import React, {useState} from 'react';

const Form =({agregarCita}) => {

const [mascota, setMascota] = useState('');
const [dueño, setDueño] = useState('');
const [fecha, setFecha] = useState('');
const [hora, setHora] = useState('');
const [sintomas, setSintomas] = useState('');


const tomarValores = (e) => {
  e.preventDefault();


  const nuevaCita = {
    mascota,
    dueño,
    fecha,
    hora,
    sintomas,
    id: Date.now(),
  };

  agregarCita(nuevaCita);


  setMascota('');
  setDueño('');
  setFecha('');
  setHora('');
  setSintomas('');
};

return (
  <form className="formulario" onSubmit={tomarValores}>
   
    <input
      type="text"
      placeholder="Nombre de mascota"
      value={mascota}
      onChange={(e) => setMascota(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Nombre del dueño"
      value={dueño}
      onChange={(e) => setDueño(e.target.value)}
      required
    />
    <input
      type="date"
      placeholder="Fecha"
      value={fecha}
      onChange={(e) => setFecha(e.target.value)}
      required
    />
    <input
      type="time"
      placeholder="Hora"
      value={hora}
      onChange={(e) => setHora(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Síntomas"
      value={sintomas}
      onChange={(e) => setSintomas(e.target.value)}
      required
    />
    <button type="submit">Agregar cita</button>
  </form>
);
};

export default Form;
