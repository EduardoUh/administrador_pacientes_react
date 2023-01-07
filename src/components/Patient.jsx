// import { useEffect } from 'react';
const Patient = ({ paciente, setPaciente, eliminarPaciente }) => {
    /*
    ejemplo de uno de los usos de useEffect
    useEffect(() => {
        console.log('El componente está listo');
    }, []);
    */
    const { email, fechaAlta, nombreMascota, nombrePropietario, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente');
        if (respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="mb-3 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">
                    {nombreMascota}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propetario: {''}
                <span className="font-normal normal-case">
                    {nombrePropietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">
                    {fechaAlta}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="bg-indigo-600 rounded-md p-1 mt-2 w-1/3 uppercase text-white hover:bg-indigo-700"
                    id="btn_editar"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-600 rounded-md p-1 mt-2 w-1/3 uppercase text-white font-bold hover:bg-red-700"
                    id="btn_eliminar"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default Patient;