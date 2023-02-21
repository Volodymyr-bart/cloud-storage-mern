// import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import UserPage from "../../pages/UserPage";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";
import Registration from "../registration/Registration";

function App() {
  // const dispatch = useDispatch()
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
