import React, { useState } from 'react';
import Boton from './Boton';

const Contador = () => {
  // Estado del componente
  const [numClics, setNumClics] = useState(0);

  // Función para incrementar el contador
  const incrementarNum = () => {
    setNumClics(numClics + 1);
    console.log("Se ha hecho clic en el botón 'Clic'");
  };

  // Función para reiniciar el contador
  const reiniciarNum = () => {
    setNumClics(0);
    console.log("Se ha hecho clic en el botón 'Reiniciar'");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p className='contador'>{numClics}</p>

      <Boton className='click' texto="Clic" onClick={incrementarNum} esClic={true} />
      <Boton texto="Reiniciar" onClick={reiniciarNum} esClic={false} />
    </div>
  );
};

export default Contador;
