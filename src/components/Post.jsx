import { useState } from "react";
import PostOption from "./postOption";
import classes from "./Post.module.css";
import ModalOptionButton from "./ModalOptionButton";
import dayjs from "dayjs";

export default function Post({ id, title, body, onPostDelete }) {
  const data = dayjs().format("DD-MM-YYYY HH:mm:ss");
  const [open, setOpen] = useState(false);

  function optionButtonHandler() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <p className={classes.date}>{data}</p>
        <p className={classes.title}>{title}</p>
        <button type="button" className={classes.postButton} onClick={optionButtonHandler}>☰</button>
        {open && (
          <ModalOptionButton changeModalState={optionButtonHandler}>
            <PostOption onPostDelete={onPostDelete} postId={id}/>
          </ModalOptionButton>
        )}
      </div>
      <div className={classes.postBody}>
        <p className={classes.postInfo}>{body}</p>
      </div>
    </div>
  );
}
