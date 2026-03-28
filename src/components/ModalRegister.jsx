import classes from "./ModalRegister.module.css";

export default function ModalRegister({children, onCloseRegisterPage}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onCloseRegisterPage}/>
            <article className={classes.modal}>{children}</article>
        </>
    )
}