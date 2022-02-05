import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import React, {useState} from 'react';


const App = () => {
  const [tareas, cambiarTareas] =useState([])
  console.log(tareas);
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
