import "./register.css"
import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext.jsx";


function Register(){
    const{createUserPost} = useContext(UserContext)

    const[user, setUser] = useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserPost(user);
    }

    return(
        <div className="register">
            <header>
                <i className="fa-brands fa-spotify"></i>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="logo spotify" />
            </header>

            <div className="register-center">
                    <div className="form-register">
                        <div className="form-head">
                            <h3>REGISTRARTE</h3>
                            <h5>Ingresa tus datos para registrarte</h5>
                        </div>
                    
                        <form onSubmit={handleSubmit}>

                        <div className="field input-field">
                            <h5>Correo electrónico</h5>
                            <input type="email" placeholder="Correo electrónico" className="input" name="email" onChange={handleChange} required />
                        </div>

                        <div className="field input-field">
                            <h5>Nombre de Usuario</h5>
                            <input type="text" placeholder="Nombre de Usuario" className="input" name="name" onChange={handleChange} required />
                        </div>

                        <div className="field input-field">
                            <h5>Contraseña</h5>
                            <input type="password" placeholder="Contraseña" className="input" name="password" onChange={handleChange} required />
                        </div>
                        <div className="field input-field">
                            <h5> Confirmar Contraseña</h5>
                            <input type="password" placeholder="Confirmar Contraseña" className="input" />
                        </div>

                        <div className="field button-field">
                            <button>Registrarte</button>
                        </div>

                        </form>

                    <div className="form-link">
                        <span>¿Ya tienes cuenta?
                            <Link to={"/"} className="link signup-link"> Iniciar Sesion</Link>
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

export default Register;