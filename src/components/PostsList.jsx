import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import Module from "./Modal";
import AddPost from "./AddPost";

export default function PostsList({ isModalVisible, toggleModalHandler }) {
  let [posts, setPosts] = useState([]);

  function addPostHandler(data) {
    setPosts((post) => [data, ...post]);
  }

  return (
    <>
      {isModalVisible && (
        <Module>
          <AddPost
            onModalClose={toggleModalHandler}
            onAddPost={addPostHandler}
          />
        </Module>
      )}
      <main>
        <div className={classes.container}>
          {posts.length > 0 &&
            posts.map((post) => (
              <Post key={post.body} title={post.title} body={post.body} />
            ))}
            {posts.length===0 && ( <h3 style={{textAlign: 'center'}}>Nie ma żanego postu...</h3> )}
        </div>
      </main>
    </>
  );
}
