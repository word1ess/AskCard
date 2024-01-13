import classes from "./Post.module.scss";
const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.post__img}>
        <img src={props.img} alt="" />
      </div>
      <p>{props.message}</p>
      <p>{props.countLikes} like`s</p>
    </div>
  );
};

export default Post;
