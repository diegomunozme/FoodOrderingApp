import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import classes from "./App.module.css";
import Footer from "./Components/Layout/Footer/Footer";
import LoginPopUp from "./Components/Layout/LoginPopUp/LoginPopUp";
import ExploreCategories from "./Components/Layout/Header/Explore/ExplorePage/ExploreCategories";
import RegisterModal from "./Components/Layout/RegisterModal/RegisterModal";


function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSetLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const handleSetRegister = (e) => {
    e.preventDefault();
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
        {login && <LoginPopUp loginModuleHandler={loginModuleHandler} />};
        {register && <RegisterModal registerModuleHandler={registerModuleHandler} />};
        <div className={classes.background}>
          <Header
            handleSetRegister={handleSetRegister}
            registerModuleHandler={registerModuleHandler}
            handleSetLogin={handleSetLogin}
            loginModuleHandler={loginModuleHandler}
          />
          {/* <Body /> */}
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
          </Routes>
          <Footer />
        </div>
        {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
