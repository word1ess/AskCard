const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const changeNewMessageTextActionCreator = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  message: text,
});
export const SendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

let initialState = {
  members: [
    { id: 1, memberName: "Андрей" },
    { id: 2, memberName: "Дмитрий" },
    { id: 3, memberName: "Александр" },
    { id: 4, memberName: "Светлана" },
    { id: 5, memberName: "Валера" },
    { id: 6, memberName: "Виктор" },
  ],
  dialogs: [
    {
      id: 1,
      messageMemberImg:
        "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      messageMemberName: "Вы",
      messageText: "Привет",
      messageFrom: "you",
    },
    {
      id: 2,
      messageMemberImg:
        "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      messageMemberName: "Андрей",
      messageText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, recusandae provident perspiciatis voluptatibus, saepe explicabo hic fugiat, tempore eos quasi nulla expedita fuga dolor necessitatibus asperiores aliquid corporis et alias.",
      messageFrom: "other",
    },
    {
      id: 3,
      messageMemberImg:
        "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      messageMemberName: "Андрей",
      messageText: "Привет",
      messageFrom: "other",
    },
    {
      id: 4,
      messageMemberImg:
        "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      messageMemberName: "Вы",
      messageText: "Привет",
      messageFrom: "you",
    },
    {
      id: 5,
      messageMemberImg:
        "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      messageMemberName: "Андрей",
      messageText: "Привет",
      messageFrom: "other",
    },
    {
      id: 6,
      messageMemberImg:
        "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      messageMemberName: "Вы",
      messageText: "Привет",
      messageFrom: "you",
    },
  ],
  textOfMessage: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_MESSAGE_TEXT:
      return { ...state, textOfMessage: action.message };
    case SEND_MESSAGE:
      let newMessage = {
        id: state.dialogs.length + 1,
        messageMemberImg:
          "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
        messageMemberName: "Вы",
        messageText: state.textOfMessage,
        messageFrom: "you",
      };
      return {
        ...state,
        dialogs: [...state.dialogs, newMessage],
        textOfMessage: "",
      };
    default:
      return state;
  }
};

export default dialogReducer;
