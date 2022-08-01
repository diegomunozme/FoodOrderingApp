import React, { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import classes from "./App.module.css";
import Footer from "./Components/Layout/Footer/Footer";
import LoginPopUp from "./Components/Layout/LoginPopUp/LoginPopUp";
import ExploreCategories from "./Components/Layout/Header/Explore/ExplorePage/ExploreCategories";


function App() {
  const [login, setLogin] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleSetLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const handleAccSetLogin = (e) => {
    e.preventDefault();
    console.log('HELLLPPPOOOOOOOOO');
    setDisplay(true);
  };

  const loginModuleHandler = () => {
    setLogin(false);
  };

  const loginAccModuleHandler = () => {
    setDisplay(false);
  };

  return (
    <div>
      {login && <LoginPopUp loginModuleHandler={loginModuleHandler} />};
      <div className={classes.background}>
      {display && <ExploreCategories loginAccModuleHandler={loginAccModuleHandler}/>};
        <Header
        handleAccSetLogin={handleAccSetLogin}
        loginAccModuleHandler={loginAccModuleHandler}
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
