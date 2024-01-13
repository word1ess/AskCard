import Member from "./Member/Member";
import classes from "./Members.module.scss";
const Members = (props) => {
  let membersContent = props.members.map((el) => (
    <Member to={`/dialogs/${el.id}`} memberName={el.memberName} />
  ));
  return (
    <div className={classes.dialog__members}>
      <div className={classes.row}>{membersContent}</div>
    </div>
  );
};

export default Members;
