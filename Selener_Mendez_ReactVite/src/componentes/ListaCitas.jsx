import React from 'react';
import './ListaCitas.css'
import Cita from './Cita.jsx'

function ListaCitas({citas}) {
return (<>

{citas.length === 0 ? (
        <p>No hay citas todavía. Cargue una para que se muestre.</p>
      ) : (
        citas.map((cita) => (
          <Cita key={cita.id} cita={cita} />
        ))
      )}
</>)
}

export default ListaCitas