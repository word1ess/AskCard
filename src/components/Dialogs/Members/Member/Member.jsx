import classes from "./Member.module.scss";
import { NavLink } from "react-router-dom";
const Member = (props) => {
  return (
    <div className={classes.member}>
      <NavLink to={props.to}>{props.memberName}</NavLink>
    </div>
  );
};

export default Member;
