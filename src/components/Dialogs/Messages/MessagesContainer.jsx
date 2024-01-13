import { connect } from "react-redux";
import {
  changeNewMessageTextActionCreator,
  SendMessageActionCreator,
} from "../../../redux/dialogReducer.js";
import Messages from "./Messages.jsx";

let mapStateToProps = (state) => {
  return {
    textOfMessage: state.dialogPage.textOfMessage,
    dialogs: state.dialogPage.dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(SendMessageActionCreator());
    },
    changeMessageText: (text) => {
      dispatch(changeNewMessageTextActionCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
