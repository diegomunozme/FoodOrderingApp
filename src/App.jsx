import React, { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import classes from "./App.module.css";
import Footer from "./Components/Layout/Footer/Footer";
import LoginPopUp from "./Components/Layout/LoginPopUp/LoginPopUp";
function App() {
  const [login, setLogin] = useState(false);

  const handleSetLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const loginModuleHandler = () => {
    setLogin(false);
  };

  return (
    <div>
      {login && (<LoginPopUp />: null)};
      <div className={classes.background}>
        <Header
          handleSetLogin={handleSetLogin}
          loginModuleHandler={loginModuleHandler}
        />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
