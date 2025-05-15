import React from "react";
import './Cita.css'

function Cita({ cita, eliminarCita }) {
    return (
      <div className="caja">
        <p><strong>Mascota:</strong> {cita.mascota}</p>
        <p><strong>Dueño:</strong> {cita.dueño}</p>
        <p><strong>Fecha:</strong> {cita.fecha}</p>
        <p><strong>Hora:</strong> {cita.hora}</p>
        <p><strong>Síntomas:</strong> {cita.sintomas}</p>
        <button onClick={() => eliminarCita(cita.id)}>Eliminar X</button>
      </div>
    );
  }
  
  export default Cita;
  