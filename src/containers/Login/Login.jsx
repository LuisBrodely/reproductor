
import "./login.css"
import React, {useState, useContext} from "react";
import { UserContext } from "../../context/UserContext";
import {Link} from "react-router-dom";

function Login(){
    const {login} = useContext(UserContext);

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    }


    return(
        <div className="login">
            <header>
                <i className="fa-brands fa-spotify"></i>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="logo spotify" />
            </header>

            <div className="login-center">
                    <div className="form-login">
                        <div className="form-head">
                            <h3>INICIAR SESIÓN</h3>
                            <h5>Ingresa tus datos para iniciar sesión</h5>
                        </div>

                        <form onSubmit={handleSubmit}>
                        <div className="field input-field">
                            <h5>Nombre de usuario</h5>
                            <input type="text" placeholder="Nombre de usuario"  name="name" className="input" onChange={handleChange} required />
                        </div>

                        <div className="field input-field">
                            <h5>Contraseña</h5>
                            <input type="password" placeholder="Contraseña" className="input" name="password" onChange={handleChange} required />
                        </div>

                        <div className="field button-field">
                            <button>Iniciar Sesión</button>

                        </div>
                        </form>

                    <div className="form-link">
                        <span>¿No tienes una cuenta?
                            <Link to={"/register"} className="link signup-link"> Registrate aquí</Link>
                        </span>
                    </div>
                </div>
            </div>
            

            <footer>
                <div className="github">
                    <a href="https://github.com/ElExca/UPFY" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
            </footer>
        </div>
    );
}

export default Login;