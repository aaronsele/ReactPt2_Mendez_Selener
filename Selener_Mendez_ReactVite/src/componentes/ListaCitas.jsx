import React from 'react';
import './ListaCitas.css';
import Cita from './Cita.jsx';

function ListaCitas({ citas, eliminarCita }) {
  return (
    <div className="lista-citas">
      {citas.length === 0 ? (
        <p>No hay citas todavía. Cargue una para que se muestre.</p>
      ) : (
        citas.map((cita) => (
          <div key={cita.id} className="media">
            <div className="media-body">
              <Cita cita={cita} eliminarCita={eliminarCita} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ListaCitas;