import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileIntroImage from "./ProfileIntroImage/ProfileIntroImage";
import ProfileUserInfo from "./ProfileUserInfo/ProfileUserInfo";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  return (
    <>
      <ProfileIntroImage image="https://mta-travel.ru/wp-content/uploads/2018/09/footer_img_bg-1024x271.png" />
      <div className={classes.content__profile}>
        <ProfileImg
          image={
            props.profileInfo.photos
              ? props.profileInfo.photos.large
              : "https://mta-travel.ru/wp-content/uploads/2018/09/footer_img_bg-1024x271.png"
          }
        />
        <ProfileUserInfo
          userName={props.profileInfo.fullName}
          userStatus={props.profileInfo.aboutMe}
          userBD="День рождения: 2 янаваря"
          userCity="Минск"
          userEducation="БСУ`11"
          userWeb={
            props.profileInfo.contacts ? props.profileInfo.contacts.vk : "Нет"
          }
        />
      </div>
    </>
  );
};

export default ProfileInfo;
