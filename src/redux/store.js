import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _callSubcriber() {},
  subscribe(observer) {
    this._callSubcriber = observer;
  },
  get state() {
    return this._state;
  },
  dispatch(action) {
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubcriber();
  },
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
          message: "Почему никто не лайкает?",
          countLikes: 20,
        },
        {
          id: 2,
          img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
          message: "Всем привет!",
          countLikes: 50,
        },
      ],
      newPostText: "Privet",
    },
    dialogPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
          name: "Андрей",
        },
        {
          id: 2,
          img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
          name: "Женя",
        },
        {
          id: 3,
          img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
          name: "Слава",
        },
      ],
    },
  },
};

window.store = store;
export default store;
