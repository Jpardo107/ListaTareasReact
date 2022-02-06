import React from 'react';
import Tarea from './Tareas';

const ListaTareas = ({tareas, cambiarTareas}) => {
  const borrarTarea = (id) =>{
    cambiarTareas(tareas.filter((tarea) => {
      if(tarea.id !== id){
        return tarea
      }
      return 
    }))

  }

  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(tareas.map((tarea) => {
      if(tarea.id === id){
        return{...tarea, texto : nuevoTexto}
      }
      return tarea
    }))
  }
  const toggleCompletadas =(id)=>{
    cambiarTareas(tareas.map((tarea) => {
      if(tarea.id === id){
        return{...tarea, completada : !tarea.completada}
      }
      return tarea
    }))
  }
  return ( 
    <ul className='lista-tareas'>
      { 
        tareas.length > 0 ?
        tareas.map((tarea) => {
          return <Tarea 
                  key={tarea.id} 
                  tarea={tarea}
                  toggleCompletadas ={toggleCompletadas}
                  editarTarea = {editarTarea}
                  borrarTarea = {borrarTarea}
                  />})
        : 
        <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>
      }
    </ul>
   );
}
export default ListaTareas;