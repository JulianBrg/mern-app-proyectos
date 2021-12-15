import { useReducer } from 'react';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
} from '../../types';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 4 },
            { nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 1 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 2 },
        ],
        tareasproyecto: null,
    }

    // Crear el dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // FUNCIONES
    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto selecionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea,
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;