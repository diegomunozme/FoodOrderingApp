import React from "react";
import Header from "./Components/Layout/Header/Header"
import Body from "./Components/Layout/Body/Body.jsx";
import classes from "./App.module.css"
import Footer from "./Components/Layout/Footer/Footer";
function App() {
  return (
    
    <div className={classes.background}>
      <Header />
      <Body />
      <Footer/>
    </div>
    
  );
}

export default App;
