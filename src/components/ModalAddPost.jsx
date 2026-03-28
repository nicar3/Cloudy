import classes from "./ModalAddPost.module.css";

export default function Modal({ children, onModalChange }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onModalChange}/>
      <article className={classes.modal}>
        {children}
      </article>
    </>
  );
}
