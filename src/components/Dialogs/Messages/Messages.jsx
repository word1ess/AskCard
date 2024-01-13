import React from "react";
import Message from "./Message/Message";

import "./Messages.scss";
const Messages = (props) => {
  let dialogsContent = props.dialogs.map((dialog) => (
    <Message
      messageMemberImg={dialog.messageMemberImg}
      messageMemberName={dialog.messageMemberName}
      messageText={dialog.messageText}
      messageFrom={dialog.messageFrom}
    />
  ));

  let messageText = React.createRef();

  const addMessage = () => {
    props.sendMessage();
  };
  const changeMessageText = () => {
    let text = messageText.current.value;
    props.changeMessageText(text);
  };

  return (
    <>
      <div className="dialog__members">
        {dialogsContent}
        <div className="dialog__input">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <textarea
              name=""
              id=""
              ref={messageText}
              onChange={changeMessageText}
              placeholder="Напишите что-нибудь"
              value={props.textOfMessage}
            ></textarea>
            <button onClick={addMessage}>Отправить</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Messages;
