import classes from "./ModalLogin.module.css";

export default function ModalLogin({children, onCloseLoginPage}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onCloseLoginPage}/>
            <article className={classes.modal}>{children}</article>
        </>
    );
}