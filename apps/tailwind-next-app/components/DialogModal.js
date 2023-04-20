'use client';

import { useState, useEffect } from 'react';

const DialogModal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { manejarDatos, showMap } = props;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function manejarClick() {
    manejarDatos('datos', false);
  }

  return (
    <div>
      <button onClick={manejarClick}>Enviar datos</button>
    </div>
  );
};

export default DialogModal;
