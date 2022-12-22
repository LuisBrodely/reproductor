import {createContext, useState, useEffect, useContext} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const createUserPost= async(user) => {
        const { name, email, password } = user;
        await axios.post("http://localhost:8080/user", { name, email, password });
        console.log("Exito");
        alert("Usuario Subido a BD")
        navigate("/");
        getUser();
    }

    const login = (user) => {
        console.log(user);
        console.log(users);
        const userAcept = ("Montse" === user.name)
        if (userAcept){
            alert("Tu usuario es correcto")

            if (user.password == "admin"){
                navigate("/player");
                console.log(user.name)
            }else{
                alert("Tu contraseña es incorrecta")
            }
        }else{
            alert("Tu usuario es incorrecto")
        }

    }

    return (
    <UserContext.Provider
        value={{createUserPost,login}}>
        {children}
    </UserContext.Provider>
    );
}