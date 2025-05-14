import './Form.css'
import React, {useState} from 'react';

const Form =({meLlevoValores}) => {

const [contenido, setContenido] = useState('');

const tomarValores = (e) => {
e.preventDefault();
meLlevoValores(contenido);
}


const detectoCambios = (e) => {
   setContenido(e.target.value);
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