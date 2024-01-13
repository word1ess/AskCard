import { connect } from "react-redux";
import {
  addNewPost,
  changeNewPostText,
} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts.jsx";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addNewPost,
  changeNewPostText,
})(MyPosts);

export default MyPostsContainer;
