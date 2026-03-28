import classes from "./Post.module.css";
import dayjs from "dayjs";

export default function Post({ title, body }) {
    const data = dayjs().format("DD-MM-YYYY HH:mm:ss");

    return (
        <div className={classes.post}>
            <div className={classes.postHeader}>
                <p className={classes.date}>{data}</p>
                <p className={classes.title}>{title}</p>
                <button type="button" className={classes.postButton}>☰</button>
            </div>
            <div className={classes.postBody}>
                <p className={classes.postInfo}>{body}</p>
            </div>
        </div>
    );
}