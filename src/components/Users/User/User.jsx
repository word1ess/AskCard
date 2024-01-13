import { NavLink } from "react-router-dom";

import "./User.scss";
const User = (props) => {
  const follow = () => {
    props.follow(props.id);
  };
  const unfollow = () => {
    props.unfollow(props.id);
  };

  let isCurrUser = props.waitingFollowUserId === props.id;
  return (
    <div className="user">
      <div className="user__follow">
        <NavLink to={`/profile/${props.id}`}>
          <div className="user__img">
            <img
              src={
                props.img != null
                  ? props.img
                  : "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png"
              }
              alt="user-avatar"
            />
          </div>
        </NavLink>

        {props.isFollow ? (
          <button
            onClick={unfollow}
            disabled={isCurrUser && props.isWaitingFollow}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={follow}
            disabled={isCurrUser && props.isWaitingFollow}
          >
            Follow
          </button>
        )}
      </div>
      <div className="user__info">
        <div className="flex">
          <h2>{props.name}</h2>
          <p className="user__status">
            {props.status != null ? props.status : "Пока не придумал :)"}
          </p>
        </div>
        <div className="user__location">
          {/* <p>{props.location.city != null ? props.location.city : "Ревда"}, </p>
          <p>
            {props.location.country != null ? props.location.country : "Россия"}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default User;
