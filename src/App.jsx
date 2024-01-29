// import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './images/fcc_primary_large.jpg'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
 };

 const reiniciarContador = () => {
setNumClics(0);
 };


  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt= 'Logo fe Free Code Camp' />
      </div>

      <div className='contenedor-contador'>

        <Contador
        numClics={numClics} />

      <Boton
      texto='click'
      esBotonDeClic={true}
      manejarClic={manejarClic} />

      <Boton 
      texto='reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador} />
      </div>
     
    </div>
  );
}

export default App;
