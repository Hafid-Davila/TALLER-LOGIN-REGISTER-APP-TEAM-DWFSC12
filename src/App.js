import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Singup from "./components/LoginRegister/Singup";
import Login from "./components/LoginRegister/Login";
import Dashboard from "./components/LoginRegister/Dashboard";
import Home from "./components/LoginRegister/Home";
import ForgotPassword from "./components/LoginRegister/ForgotPassword";
import Todo from "./components/ToDoList";

function App() {

  return (
    <Container
      className="d-flex aling-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Container >
  )


}

export default App;
