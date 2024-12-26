import NavBar from "./components/Navbar/NavBar";
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import About from "./views/About/About";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/appointments" element={<MisTurnos/>}/>
    </Routes>
    </>
  );
}

export default App;