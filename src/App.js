import React, { useState, useRef } from "react";
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import PostItem from './components/PostItem';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/button/input/MyInput";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/button/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascropt", body: "Description" },
    { id: 2, title: "Javascropt 2", body: "Description" },
    { id: 3, title: "Javascropt 3", body: "Description" },
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
