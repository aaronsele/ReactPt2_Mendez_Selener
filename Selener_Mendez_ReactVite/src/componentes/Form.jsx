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
  };

 
  agregarCita(nuevaCita);


  setMascota('');
  setDueño('');
  setFecha('');
  setHora('');
  setSintomas('');
}




const detectoCambios = (e) => {
   const {name, value} = e.target;
    }


    return (
      
<form onSubmit={tomarValores}>
<input type="text" placeholder="Nombre de mascota" onChange={detectoCambios} required/>
<input type="text" placeholder="Nombre del dueño" onChange={detectoCambios} required/>
<input type="date" placeholder="Fecha" onChange={detectoCambios} required/>
<input type="time" placeholder="Hora" onChange={detectoCambios} required/>
<input type="text" placeholder="Síntomas" onChange={detectoCambios} required/>
<button type="submit">Enviar formulario</button>
</form>

    )
}
export default Form