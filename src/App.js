import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import React, {useState} from 'react';
import ListaTareas from './componentes/ListaTareas';
import {v4 as uuidv4} from 'uuid'


const App = () => {
  const [tareas, cambiarTareas] =useState(
    [
      {
        id:uuidv4(),
        texto:'Lavarme las patas',
        completada: false
      },
      {
        id:uuidv4(),
        texto:'Lavarme las bolas',
        completada: false
      }
    ]
  );
  console.log(tareas);
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;
