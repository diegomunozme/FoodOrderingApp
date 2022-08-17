import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import classes from "./App.module.css";
import Footer from "./Components/Layout/Footer/Footer";
import LoginPopUp from "./Components/Layout/LoginPopUp/LoginPopUp";
import ExploreCategories from "./Components/Layout/Header/Explore/ExplorePage/ExploreCategories";
import RegisterModal from "./Components/Layout/RegisterModal/RegisterModal";
import Explore from "./Pages/Rewards/Explore";

function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSetLogin = (e) => {
    e.preventDefault();
    setRegister(false);
    setLogin(true);
  };

  const handleSetRegister = (e) => {
    e.preventDefault();
    setLogin(false);
    setRegister(true);
  };

  const loginModuleHandler = () => {
    setLogin(false);
  };

  const registerModuleHandler = () => {
    setRegister(false);
  };

  return (
    <div>
      <Router>
        {/* <Routes> */}
        {login && (
          <LoginPopUp
            loginModuleHandler={loginModuleHandler}
            handleSetRegister={handleSetRegister}
          />
        )}
        ;
        {register && (
          <RegisterModal
            handleSetLogin={handleSetLogin}
            registerModuleHandler={registerModuleHandler}
          />
        )}
        ;
        <div className={classes.background}>
          <Header
            handleSetRegister={handleSetRegister}
            registerModuleHandler={registerModuleHandler}
            handleSetLogin={handleSetLogin}
            loginModuleHandler={loginModuleHandler}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Body />
                </>
              }
            />
            <Route
              exact
              path="/Explore"
              element={
                <>
                  <Explore />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
        {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
