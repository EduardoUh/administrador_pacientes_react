import { useState, useEffect } from 'react';
import Error from './Error';
// otras maneras de definir las funciones y exportarlas
const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    // el state se define dentro del componente pero antes del return
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    /*
    Ejemplo de uno de los usos de useEffect: 
        Si la dependencia está vacía entonces el callback solo se ejecutará
        una vez, pero su hay una dependencia entonces se ejecutará cada vez
        que está sufra un cambio
    */

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombreMascota(paciente.nombreMascota);
            setNombrePropietario(paciente.nombrePropietario);
            setEmail(paciente.email);
            setFechaAlta(paciente.fechaAlta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        /*
        const fecha = Date.now().toString(36);
        const numeros = Math.random().toString(36).substring(2);
        const id = fecha + numeros;
        */
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            fechaAlta,
            sintomas,
        }

        if (paciente.id) {
            // Editando registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
        }
        else {
            // Agregando registro
            /*
                Se debe evitar el uso de métodos que alteren el objeto original
                const copiaPacientes = pacientes.map(paciente => paciente);
                copiaPacientes.push(paciente);
        */
            // actualizando el state de app
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        /*
        Reiniciar el formulario
        */
        setNombreMascota('');
        setNombrePropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    }
    return (
        <div className="w-full md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg text-center mt-5 mb-10">
                Añade Pacientes y &nbsp;
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg px-5 py-10 mb-10 w-full"
            >
                {error &&
                    <Error>
                        {/*
                        La ventaja de usar el patrón children, es que puedes
                        pasar más información o código html sin separarlo 
                        */}
                        <p>Al fields are required</p>
                    </Error>
                }
                <div className="mb-5">
                    <label htmlFor="nombre_mascota" className="block text-gray-700 font-bold uppercase">
                        Nombre Mascota
                    </label>
                    <input
                        id="nombre_mascota"
                        className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={nombreMascota /* el valor del input será el valor del state actual */}
                        onChange={(event) => setNombreMascota(event.target.value) /* Se actualiza el valor
                    del state cada que suceda un cambio en el input es decir, cada que se escriba algo */}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nombre_propetario" className="block text-gray-700 font-bold uppercase">
                        Nombre Propietario
                    </label>
                    <input
                        id="nombre_propetario"
                        className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre del propetario"
                        value={nombrePropietario}
                        onChange={(event) => setNombrePropietario(event.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email_propetario" className="block text-gray-700 font-bold uppercase">
                        Email
                    </label>
                    <input
                        id="email_propetario"
                        className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="Email contacto propetario"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">
                        Alta
                    </label>
                    <input
                        id="alta"
                        className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                        type="date"
                        value={fechaAlta}
                        onChange={(event) => setFechaAlta(event.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(event) => setSintomas(event.target.value)}
                    />
                </div>
                <input type="submit"
                    className="bg-indigo-600 w-full rounded-md p-3 text-white font-bold uppercase hover:bg-indigo-700 transition-colors"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}
export default Form;

/*
export default function Form() {

    return (
        <form action="./#" onsubmit="return false">
            <label htmlFor="user_name">Ingrese su nombre:</label>
            <input type="text" id="user_name" />
        </form>
    )
}
*/
// export default Form;