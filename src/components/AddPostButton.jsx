import classes from "./AddPostButton.module.css";

export default function AddPostButton({toggleModalHandler}) {
    return (
        <div className={classes.addPostButton}>
            <div className={classes.buttonContainer}>
                <button type="button" onClick={toggleModalHandler}>Dodaj post</button>
            </div>
        </div>
    );
}