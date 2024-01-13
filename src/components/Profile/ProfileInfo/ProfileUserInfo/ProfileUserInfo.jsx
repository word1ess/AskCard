import classes from "./ProfileUserInfo.module.scss";

const ProfileUserInfo = (props) => {
  return (
    <div className={props.content__profileText + " " + props.contentProfile}>
      <h3 className={classes.contentProfile__name}>{props.userName}</h3>
      <p className={classes.contentProfile__status}>{props.userStatus}</p>
      <p className={classes.contentProfile__birth}>{props.userBD}</p>
      <p className={classes.contentProfile__city}>Город: {props.userCity}</p>
      <p className={classes.contentProfile__edu}>
        Образование: {props.userEducation}
      </p>
      <p className={classes.contentProfile__web}>Веб-сайт: {props.userWeb}</p>
    </div>
  );
};

export default ProfileUserInfo;
