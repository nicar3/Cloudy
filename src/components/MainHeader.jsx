import { useState } from "react";
import ModalLogin from "./ModalLogin";
import Login from "./Login";
import ModalRegister from "./ModalRegister";
import Register from "./Register";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  const [loginModalState, setLoginModalState] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(true);

  function loginModalHandler() {
    setLoginModalState(!loginModalState);
  }

  function registerModalHandler() {
    setRegisterModalState(!registerModalState);
  }

  return (
    <header>
      <div className={classes.header}>
        <h1>Cloudy Co.</h1>
        <input
          type="search"
          name="search"
          className={classes.search}
          placeholder="Wyszukaj post..."
        />
        <div className={classes.buttons}>
          <button
            type="button"
            className={classes.headerButton}
            onClick={loginModalHandler}
          >
            Zaloguj się
          </button>
          {loginModalState && (
            <ModalLogin onCloseLoginPage={loginModalHandler}>
              <Login onCloseLoginPage={loginModalHandler} />
            </ModalLogin>
          )}
          <button
            type="button"
            className={classes.headerButton}
            onClick={registerModalHandler}
          >
            Załóż konto
          </button>
          {registerModalState && (
            <ModalRegister onCloseRegisterPage={registerModalHandler}>
              <Register onCloseRegisterPage={registerModalHandler} />
            </ModalRegister>
          )}
        </div>
      </div>
    </header>
  );
}
