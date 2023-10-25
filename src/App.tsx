import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BuildingViewer } from "./components/building/BuildingViewer";
import { MapViewer } from "./components/map/MapViewer";
import { ContextProvider } from "./middleware/ContextProvider";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { LoginForm } from "./components/user/LoginForm";
import { UserProvider } from "./UserProvider";

function App() {
  return (
    <ContextProvider>
      <UserProvider>
      <Router>
        <Routes>
            <Route path="/building" element={<BuildingViewer />} />
            <Route path="/map" element={<MapViewer />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/my-login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
      </UserProvider>
    </ContextProvider>
  );
}

export default App;
