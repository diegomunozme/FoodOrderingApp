import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Reset from "./Reset";
import Register from "./Register";
const FirebaseApp = () => {
  
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/reset" element={<Reset/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default FirebaseApp;