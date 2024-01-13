import classes from "./ProfileImg.module.scss";
const ProfileImg = (props) => {
  return (
    <div className={classes.content__profileImg}>
      <img src={props.image}></img>
    </div>
  );
};

export default ProfileImg;
