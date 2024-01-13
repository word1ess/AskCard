import { usersApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_COUNT_OF_USERS = "GET_COUNT_OF_USERS";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const LOADING = "LOADING";
const FOLLOW_WAITING = "FOLLOW_WAITING";

export const followAccepted = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAccepted = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const getCountOfUsers = (maxUsers) => ({
  type: GET_COUNT_OF_USERS,
  maxUsers,
});
export const getCurrentPage = (currentPage) => ({
  type: GET_CURRENT_PAGE,
  currentPage,
});
export const folowWaiting = (isWaiting, userId) => ({
  type: FOLLOW_WAITING,
  isWaiting,
  userId,
});
export const isLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});
export const getUsers = (countOfUsersOnPage, currentPage) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    dispatch(getCurrentPage(currentPage));
    setTimeout(() => {
      usersApi.getUsersApi(countOfUsersOnPage, currentPage).then((response) => {
        dispatch(setUsers(response.items));
        dispatch(getCountOfUsers(response.totalCount));
        dispatch(isLoading(false));
      });
    }, 2000);
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(folowWaiting(true, userId));
    usersApi.followApi(userId).then((resultCode) => {
      resultCode === 0 && dispatch(followAccepted(userId));
      dispatch(folowWaiting(false));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(folowWaiting(true, userId));
    usersApi.unfollowApi(userId).then((resultCode) => {
      resultCode === 0 && dispatch(unfollowAccepted(userId));
      dispatch(folowWaiting(false));
    });
  };
};
let initialState = {
  users: [],
  countOfUsersOnPage: 10,
  countOfPages: 0,
  countOfAllUsers: 0,
  currentPage: 1,
  isLoadingPage: true,
  isWaitingFollow: false,
  waitingFollowUserId: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        ],
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            }
            return u;
          }),
        ],
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case GET_COUNT_OF_USERS: {
      return {
        ...state,
        countOfAllUsers: action.maxUsers,
      };
    }
    case GET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case LOADING: {
      return {
        ...state,
        isLoadingPage: action.isLoading,
      };
    }
    case FOLLOW_WAITING: {
      return {
        ...state,
        isWaitingFollow: action.isWaiting,
        waitingFollowUserId: action.isWaiting ? action.userId : null,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
