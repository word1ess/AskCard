import classes from "./Message.module.scss";

const Message = (props) => {
  if (props.messageFrom === "you") {
    return (
      <div className={`${classes.message} ${props.messageFrom}`}>
        <div className={classes.message__member}>
          <div className={classes.message__img}>
            <img src={props.messageMemberImg} alt="" />
          </div>
          <p>{props.messageMemberName}</p>
        </div>
        <div className={classes.message__message}>
          <p>{props.messageText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${classes.message} ${props.messageFrom}`}>
        <div className={classes.message__message}>
          <p>{props.messageText}</p>
        </div>
        <div className={classes.message__member}>
          <div className={classes.message__img}>
            <img src={props.messageMemberImg} alt="" />
          </div>
          <p>{props.messageMemberName}</p>
        </div>
      </div>
    );
  }
};

export default Message;
