import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListadoPacientes from './components/ListadoPacientes';
function App() {
  /*
  const edad = 18;
  const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2;
  
    Dentro del return son aceptadas únicamente expresiones, y se 
    colocan dentro de llaves, si dentro de estas llaves no se pueden
    colocar otras llaves es por eso que las condicionales if, funciones, etc
    no funcionarán dentro del return.
  */
  /*
  return (
    <div >
      <h1>{'Hola Mundo'.toLowerCase()}</h1>
      {edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'}
      <p>{edad}</p>
      <p>Suma:<br />{sumar(5, 10)}</p>
      <input type="text" />
      <img src="algunaimagen.jpg" />
    </div >
  ) 
  se puede omitir el escribir el tipo de etiqueta del contenedor principal
  de la siguiente manera. se le conoce como "fragments"
  */

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Local Storage

  // recuperando datos de localStorage si este tiene algo

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    if (localStorageData.length > 0) {
      setPacientes(localStorageData);
    }
  }, []);

  // Actualizando datos de localStorage

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App