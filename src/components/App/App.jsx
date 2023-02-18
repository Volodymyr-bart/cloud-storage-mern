import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";
import Registration from "../registration/Registration";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Registration />} /> */}
      </Routes>
    </div>
  );
}

export default App;
