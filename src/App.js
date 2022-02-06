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
        texto:'Colgar la ropa',
        completada: false
      },
      {
        id:uuidv4(),
        texto:'Sacar a pasear al perro',
        completada: true
      }
    ]
  );
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
