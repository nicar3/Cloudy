import classes from "./ModalOptionButton.module.css";

export default function ModalOptionButton({ children, changeModalState }) {
  return (
    <>
      <div className={classes.backdrop} onClick={changeModalState}/>
      <article className={classes.modal}>
        {children}
      </article>
    </>
  );
}
