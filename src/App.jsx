import { useState } from "react";

import MainHeader from "./components/MainHeader";
import AddPostButton from "./components/AddPostButton";
import PostsList from "./components/PostsList";
import MainFooter from "./components/MainFooter";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModalHandler() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <>
      <MainHeader />
      <AddPostButton toggleModalHandler={toggleModalHandler}/>
      <PostsList isModalVisible={isModalVisible} toggleModalHandler={toggleModalHandler}/>
      <MainFooter />
    </>
  );
}
