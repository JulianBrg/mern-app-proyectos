import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    // state para iniciar  sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
    });

    // extraer de usuario\
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesión
    const onSubmit = (e) => {
        e.preventDefault();

        // validar que no haya campos vacios

        // pasarlo al action
    }



    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Registrarse
                </Link>
            </div>
        </div>
    )
}

export default Login
