import User from "./User/User";
import "./Users.scss";

const Users = (props) => {
  let usersContent = props.users.map((u) => {
    return (
      <User
        id={u.id}
        img={u.photos.small}
        name={u.name}
        isFollow={u.followed}
        status={u.status}
        location={u.location}
        follow={props.follow}
        unfollow={props.unfollow}
        isWaitingFollow={props.isWaitingFollow}
        waitingFollowUserId={props.waitingFollowUserId}
      ></User>
    );
  });
  return <div className="users">{usersContent}</div>;
};

export default Users;
