import classes from "./Login.module.css";

export default function Login({ onCloseLoginPage }) {
  return (
    <div className={classes.container}>
      <div className={classes.loginTitle}>
        <h1>Login</h1>
      </div>
      <form method="post" className={classes.loginFrom}>
        <div className={classes.loginInputs}>
          <label htmlFor="loginInput">Login:</label>
          <input
            type="text"
            name="title"
            className={classes.loginInput}
            placeholder="Login..."
          />
          <label htmlFor="loginInput">Hasło:</label>
          <input
            type="password"
            placeholder="Hasło..."
            className={classes.loginInput}
          />
        </div>
        <div className={classes.loginButtons}>
          <button type="button" onClick={onCloseLoginPage}>
            Anuluj
          </button>
          <button>Zaloguj</button>
        </div>
      </form>
    </div>
  );
}
