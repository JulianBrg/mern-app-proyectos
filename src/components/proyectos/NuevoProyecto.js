import React, { Fragment, useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {
        formulario,
        errorformulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError
    } = proyectosContext;

    // state para el proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer el nombre del proyecto
    const { nombre } = proyecto;

    // Lee los contenidos de los inputs
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if (nombre === '') {
            mostrarError();
            return null;
        }

        // agregar al state
        agregarProyecto(proyecto);

        // resetear el form
        guardarProyecto({
            nombre: ''
        })
    }

    //mostrar formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo Proyecto
            </button>

            {
                formulario ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Nombre del Proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />
                        </form>
                    ) : null
            }
            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
    )
}

export default NuevoProyecto
