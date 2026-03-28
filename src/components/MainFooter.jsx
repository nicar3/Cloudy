import classes from "./MainFooter.module.css";

export default function MainFooter() {
  return (
    <footer>
      <p className={classes.footerInfo}>
        Strona wykonana przez: <b>Nicar3</b>
      </p>
    </footer>
  );
}
