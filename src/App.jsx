import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      {/* Navbar will be visible on all pages */}
      <Navbar />

      <Routes>
        {/* Route for Home (Landing) Page */}
        <Route path="/" element={<Landing />} />

        {/* Route for Signup Page */}
        <Route path="/signup" element={<Signup />} />

       
         <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;



