import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BarPage from "./pages/BarPage";
import Signup from "./pages/Signup";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<BarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
