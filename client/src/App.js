import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";

function App() {
  const user = true
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home />: <Navigate to="register"/>} />
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
