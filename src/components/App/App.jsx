import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";
import Registration from "../registration/Registration";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
