import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

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

         <Route 
          path="/dashboard" 
          element={
            <div className="flex min-h-screen">
              <Sidebar /> {/* Sidebar on the left */}
              <div className="flex-grow p-4">
                {/* Main content of the page, replace this with actual dashboard content */}
                <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                {/* You can put your dashboard content here */}
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;



