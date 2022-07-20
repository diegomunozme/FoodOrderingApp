import React from "react";
import Header from "./Components/Layout/Header.jsx";
import Body from "./Components/Body/Body.jsx";
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
