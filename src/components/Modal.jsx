import classes from "./Modal.module.css";

export default function Module({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <article className={classes.modal}>
        {children}
      </article>
    </>
  );
}
