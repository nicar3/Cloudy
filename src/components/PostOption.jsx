import { FaTrash, FaEdit } from "react-icons/fa"
import classes from "./PostOption.module.css";

export default function PostOption({postId, onPostDelete}) {
  return (
    <nav>
      <div className={classes.container}>
        <div className={classes.option}><FaEdit /> Edytuj</div>
        <div className={classes.option} onClick={()=>onPostDelete(postId)}><FaTrash /> Usuń</div>
      </div>
    </nav>
  );
}
