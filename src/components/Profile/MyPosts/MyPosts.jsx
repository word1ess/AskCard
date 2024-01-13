import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  function afterSubmition(event) {
    event.preventDefault();
  }

  let postsContent = props.posts.map((post) => (
    <Post img={post.img} message={post.message} countLikes={post.countLikes} />
  ));

  let postText = React.createRef();

  const addNewPost = () => {
    props.addNewPost();
  };

  const onPostChange = () => {
    let text = postText.current.value;
    props.changeNewPostText(text);
  };

  return (
    <>
      <div className={classes.contentInput}>
        <h2 className={classes.contentInput__title}>Мои посты</h2>
        <form action="#" onSubmit={afterSubmition}>
          <textarea
            name="text"
            placeholder="Ваш пост"
            className={classes.contentInput__textarea}
            ref={postText}
            value={props.newPostText}
            onChange={onPostChange}
          />
          <button className="btn-bg" onClick={addNewPost}>
            Отправить
          </button>
        </form>
      </div>
      {postsContent}
    </>
  );
};

export default MyPosts;
