import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import classes from "./Login.module.css";
import RegisterModal from "../../RegisterModal/RegisterModal";
import googleLogo from "../../../../assets/images/googleLogo.jpg";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      //Look into triggering a loading screen
      return;
    }
    //if (user) navigate("./dashboard");
  }, [user, loading]);

  const trial = ()=>{
    console.log('e')
  }

  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <header className={classes.header}>
          <h2>Sign In</h2>
        </header>
        <div className={classes.loginEmail}>Email Address</div>
        <input
          type="text"
          className={classes.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail Address"
        />
        <div className={classes.loginPassword}>Password</div>
        <input
          type="password"
          className={classes.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          className={classes.login__btn}
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div className={classes.seperator} />
        <button className={classes.login__google} onClick={signInWithGoogle}>
          <img
            src={googleLogo}
            alt="placeholder"
            style={{ display: "inline" }}
          />
          Login With Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account??
          <div
            className={classes.registerLink}
            // onClick={props.handleSetRegister}
          >
            {" "} 
            <u onClick={props.handleSetRegister}>Register now.</u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
