import React from "react";
import Header from "./Components/Layout/Header/Header"
import Body from "./Components/Layout/Body/Body.jsx";
import classes from "./App.module.css"
function App() {
  return (
    <div className={classes.background}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
