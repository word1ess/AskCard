import classes from "./ProfileIntroImage.module.scss";

const ProfileIntroImage = (props) => {
  return (
    <div className={classes.content__introImage}>
      <img src={props.image}></img>
    </div>
  );
};

export default ProfileIntroImage;
