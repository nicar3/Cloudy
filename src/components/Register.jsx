import classes from "./Register.module.css";

export default function Register({ onCloseRegisterPage }) {
  return (
    <div className={classes.container}>
      <div className={classes.loginTitle}>
        <h1>Stwórz konto</h1>
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
          <label htmlFor="loginInput">Powtórz hasło:</label>
          <input
            type="password"
            placeholder="Powtórz hasło..."
            className={classes.loginInput}
          />
        </div>
        <div className={classes.loginButtons}>
          <button type="button" onClick={onCloseRegisterPage}>
            Anuluj
          </button>
          <button>Zaloguj</button>
        </div>
      </form>
    </div>
  );
}
