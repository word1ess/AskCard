import { profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const GET_PROFILE_INFO = "GET_PROFILE_INFO";
const LOADING = "LOADING";
const GET_CURRENT_USER_ID = "GET_CURRENT_USER_ID";

export const addNewPost = () => ({ type: ADD_POST });
export const changeNewPostText = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  postMessage: text,
});
export const getProfileInfoAccepted = (profileInfo) => ({
  type: GET_PROFILE_INFO,
  body: profileInfo,
});
export const loading = (isLoading) => ({
  type: LOADING,
  isLoading,
});
export const getUserId = (id) => ({
  type: GET_CURRENT_USER_ID,
  id,
});

let initialState = {
  profileInfo: {},
  posts: [
    {
      id: 1,
      img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      message: "YOYO",
      countLikes: "20",
    },
    {
      id: 2,
      img: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-1024.png",
      message: "PRivet",
      countLikes: "10",
    },
  ],
  isLoadingPage: true,
  newPostText: "Privet",
  currentUserId: "29670",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_POST_TEXT:
      return { ...state, newPostText: action.postMessage };
    case ADD_POST:
      let newPost = {
        // img: postMessage.img,
        id: state.posts.length + 1,
        message: state.newPostText,
        countLikes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case GET_PROFILE_INFO: {
      return {
        ...state,
        profileInfo: {
          ...action.body,
        },
      };
    }
    case LOADING: {
      return {
        ...state,
        isLoadingPage: action.isLoading,
      };
    }
    case GET_CURRENT_USER_ID: {
      return {
        ...state,
        currentUserId: action.id,
      };
    }
    default:
      return state;
  }
};

export const getProfileInfo = (userId) => {
  return (dispatch) => {
    dispatch(loading(true));
    profileApi.getCurrentUserProfile(userId).then((response) => {
      dispatch(getProfileInfoAccepted(response));
      dispatch(loading(false));
    });
  };
};

export default profileReducer;
