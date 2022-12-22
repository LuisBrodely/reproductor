import React, { Component } from 'react';
import "./App.css"

import Login from "./containers/Login/Login.jsx";
import { UserProvider } from './context/UserContext.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./containers/Register/Register.jsx";
import Player from "./containers/Player/Player.jsx";
import Admin from "./containers/Admin/Admin.jsx";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/reproductor" element={<Login></Login>}></Route>
                    <Route path="/player" element={<Player></Player>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/admin" element={<Admin></Admin>}></Route>
                </Routes>
            </UserProvider>
        </BrowserRouter>

    );
  }
}

export default App;