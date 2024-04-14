import React from 'react';

const Boton = ({ texto, onClick, esClic }) => {
  const claseBtn = esClic ? 'btnClick' : 'btnReiniciar';

  return (
    <button className={claseBtn} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
