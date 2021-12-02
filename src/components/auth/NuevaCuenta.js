import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // state para iniciar  sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario\
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // cuando el usuario quiere registrarse
    const onSubmit = (e) => {
        e.preventDefault();

        // validar que no haya campos vacios

        // passsword minimo de 6 caracteres

        // que los 2 password sean iguales

        // pasarlo al action
    }



    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            // el id tiene que ser el mismo que el htmlFor
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Correo</label>
                        <input
                            type="email"
                            // el id tiene que ser el mismo que el htmlFor
                            id="email"
                            name="email"
                            placeholder="Tu Correo"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            // el id tiene que ser el mismo que el htmlFor
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input
                            type="password"
                            // el id tiene que ser el mismo que el htmlFor
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite Tu Contraseña"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
