import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Splash from "./Pages/Splash/Splash";
import Login from "./Pages/Login/Login";
import OpenBalance from "./Pages/OpenBalance/OpenBalance";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/balances/open" element={<OpenBalance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
