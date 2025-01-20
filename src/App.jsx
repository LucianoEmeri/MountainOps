import NavBar from "./components/Navbar/NavBar";
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import About from "./views/About/About";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Error404 from "./components/Error404/404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<MisTurnos />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
