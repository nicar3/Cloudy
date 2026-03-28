import classes from "./MainHeader.module.css";

export default function MainHeader() {
    return (
        <header>
            <div className={classes.header}>
                <h1>Cloudy Co.</h1>
                <input type="search" name="search" className={classes.search} placeholder="Wyszukaj post..." />
                <div className={classes.buttons}>
                    <button type="button" className={classes.headerButton}>Zaloguj się</button>
                    <button type="button" className={classes.headerButton}>Załóż konto</button>
                </div>
            </div>
        </header>
    )
}