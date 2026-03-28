import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import ModalAddPost from "./ModalAddPost";
import AddPost from "./AddPost";

export default function PostsList({ isModalVisible, toggleModalHandler }) {
  let [posts, setPosts] = useState([]);

  function addPostHandler(data) {
    setPosts((post) => [data, ...post]);
  }

  function deletePost(id) {
    setPosts(prev => prev.filter(post => post.id !== id));
  }

  return (
    <>
      {isModalVisible && (
        <ModalAddPost onModalChange={toggleModalHandler}>
          <AddPost
            modalToggle={toggleModalHandler}
            onAddPost={addPostHandler}
          />
        </ModalAddPost>
      )}
      <main>
        <div className={classes.container}>
          {posts.length > 0 &&
            posts.map((post) => (
              <Post key={post.id} id={post.id} title={post.title} body={post.body} onPostDelete={deletePost}/>
            ))}
            {posts.length===0 && ( <h3 style={{textAlign: 'center'}}>Nie ma żanego postu...</h3> )}
        </div>
      </main>
    </>
  );
}
