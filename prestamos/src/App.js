import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);

  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
        />
      </div>
    </Fragment>
  );
}

export default App;
