import React from 'react';

const PostForm = () => {
    const [post, setPost] = useState({ title: '', body: '' });
    
    return (
        <form >
        {/*Управляемый компонент*/}
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        {/* Неуправляемый/Неконтролируемый компонент компонент*/}
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};

export default PostForm;