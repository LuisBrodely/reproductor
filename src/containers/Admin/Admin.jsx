import React, {useContext, useState} from "react";
import "./admin.css"
import {UserContext} from "../../context/UserContext.jsx";
import {Link} from "react-router-dom";

function Admin(){

    const{createSong, updateSong, deleteSong} = useContext(UserContext)

    const [song, setSong] = useState({
        songtitle: "",
        songartist:"",
        songgenre:"",
        songurl:"",
        songimg:""
    })

    const handleChange = (e) => {
        setSong({...song,[e.target.name]: e.target.value})
        console.log(song);
    }

    const crearSong = (e) => {
        e.preventDefault();
        createSong(song);
    }

    const actualizarSong = (e) => {
      e.preventDefault();
      updateSong(song);
    }

    const borrarSong = (e) => {
        e.preventDefault();
        deleteSong(song);
    }

    return (
        <div className="admin">
            <div className="column">
                <div className="icon">
                    <i className="fa-brands fa-spotify"></i>
                </div>

                <div className="box">
                    <div className="box-center">
                        <div className="icon-menu">
                            <Link to={"/player"}><i className="fa-solid fa-house"></i></Link>
                        </div>
                        <div className="icon-menu">
                            <i className="active fa-sharp fa-solid fa-compact-disc active"></i>
                        </div>
                    </div>

                </div>

                <div className="box">
                    <div className="box-center">
                        <div className="icon-menu">
                            <Link to={"/player"}><i className="activeu fa-solid fa-user-plus"></i></Link>
                        </div>
                        <div className="icon-menu">
                            <Link to={"/"}><i className="fa-sharp fa-solid fa-right-from-bracket"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-section">

                <div className="box-input">
                    <h3>Agregar Cancion</h3>
                    <h5>Ingresa los datos de la canción que deseas agregar.</h5>

                    <form onSubmit={crearSong}>
                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="Nombre de la canción"  name="songtitle" className="input" required />
                    </div>

                    <div className="input-columns">
                        <div className="admin input-admin">
                            <input  onChange={handleChange} type="text" placeholder="Artista"  name="songartist" className="input" required />
                        </div>
                        <div className="admin input-admin">
                            <input  onChange={handleChange} type="text" placeholder="Genero"  name="songgenre" className="input" required />
                        </div>
                    </div>

                    <div className="admin input-admin">
                        <input  onChange={handleChange} type="text" placeholder="URL de la canción"  name="songurl" className="input" required />
                    </div>

                    <div className="admin input-admin">
                        <input  onChange={handleChange} type="text" placeholder="URL de la imagen de la canción"  name="songimg" className="input" required />
                    </div>

                    <div className="admin button-admin">
                        <button>Publicar Canción</button>
                    </div>
                    </form>
                </div>

                <div className="box-input">
                    <h3>Actualizar Canción</h3>
                    <h5>Ingresa el nombre de la canción y actualiza los datos necesarios.</h5>

                    <form onSubmit={actualizarSong} >
                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="Nombre de la canción"  name="songtitle" className="input" required />
                    </div>

                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="URL de la canción"  name="songurl" className="input" required />
                    </div>

                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="URL de la imagen de la canción"  name="songimg" className="input" required />
                    </div>

                    <div className="admin button-admin">
                        <button>Actualizar Canción</button>
                    </div>
                </form>
                </div>

                <div className="box-input">
                    <h3>Eliminar Canción</h3>
                    <h5>Ingresa el nombre de la canción que deseas eliminar.</h5>

                    <form onSubmit={borrarSong}>
                    <div className="admin input-admin">
                        <input onChange={handleChange} type="text" placeholder="Nombre de la canción"  name="songtitle" className="input" required />
                    </div>

                    <div className="admin button-admin">
                        <button>Eliminar Canción</button>
                    </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Admin;