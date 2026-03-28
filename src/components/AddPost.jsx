import { useState } from "react";
import classes from "./AddPost.module.css";

export default function AddPost({ modalToggle, onAddPost }) {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  function titleChangeHandler(e) {
    setPostTitle(e.target.value);
  }

  function postChangeHandler(e) {
    setPostBody(e.target.value);
  }

  function addPostHandler(e) {
    e.preventDefault();
    let postData = {
      id: crypto.randomUUID(),
      title: postTitle,
      body: postBody,
    };
    onAddPost(postData);
    modalToggle();
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.addPostTitle}>Dodaj post</h1>
      <form method="post" className={classes.addPostForm}>
        <label htmlFor="addPostInput">Tytuł:</label>
        <input
          type="text"
          name="title"
          className={classes.addPostInput}
          placeholder="Wpisz tytuł"
          onChange={titleChangeHandler}
        />
        <label htmlFor="addPostInput">Kod:</label>
        <textarea
          name="postInfo"
          placeholder="Wklej kod"
          className={classes.addPostInput}
          onChange={postChangeHandler}
        />
        <div className={classes.addPostButtons1}>
          <button type="button" onClick={modalToggle}>
            Anuluj
          </button>
          <button onClick={addPostHandler}>Dodaj</button>
        </div>
      </form>
    </div>
  );
}
