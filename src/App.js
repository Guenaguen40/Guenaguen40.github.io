import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Landingpage from './Pages/Landingpage'

function App() {
  return (
    <div className="App">
       <Router>
     <Routes>
       <Route  exact path="/" element={<Landingpage />}></Route>
       <Route exact path="/dashboard" element={<Dashboard />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/register" element={<Register />} />
     </Routes>
  
   </Router>
    </div>
  );
}

export default App;
