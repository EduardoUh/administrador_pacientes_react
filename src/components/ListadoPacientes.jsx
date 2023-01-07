// import { useEffect } from "react";
import Patient from "./Patient";
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    /* Solución a un reto
    useEffect(() => {
        if (pacientes.length > 0) {
            console.log('Nuevo Paciente');
        }
    }, [pacientes]);
     */
    return (
        <div className="w-full md:w-1/2 lg:w-3/5 mx-3">

            {pacientes.length > 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de Pacientes
                    </h2>
                    <p className="text-lg text-center mt-5 mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                    <div className="md:h-screen md:overflow-y-scroll">
                        {pacientes.map(paciente => (
                            <Patient
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No Hay Pacientes
                    </h2>
                    <p className="text-lg text-center mt-5 mb-10">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">
                            y apareceran en este lugar
                        </span>
                    </p>
                </>
            )
            }
        </div>
    )
}

export default ListadoPacientes;