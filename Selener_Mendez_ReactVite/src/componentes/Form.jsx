import './Form.css'
import React from "react";

function Form (){
    return (
        <div>     
        <form>
        <p>Nombre mascota</p>
    <input type="text" id="nombreMascota" placeholder="Nombre de mascota"></input>
    <p>Nombre dueño</p>
    <input type="text" id="nombreDueño" placeholder="Nombre del dueño"></input>
    <p>Fecha</p>

    <input type="date" id="fecha" ></input>
    <p>Hora</p>
    <input type="time" id="hora" ></input>
    <p>Síntomas</p>
    <input type="text" id="sintomas"></input>
    <p></p>
    <button id="enviar">agregar cita</button> 
      

        </form></div>

    )
}
export default Form