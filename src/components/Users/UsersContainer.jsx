import { connect } from "react-redux";
import {
  follow,
  unfollow,
  isLoading,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Pagination from "./Pagination/Pagination";
import Loading from "../Common/Loading/Loading";

class UsersClassComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.countOfUsersOnPage, this.props.currentPage);
  }

  onPageChanged = (page) => {
    this.props.getUsers(this.props.countOfUsersOnPage, page);
  };

  render() {
    return (
      <div className="content__main">
        <Pagination
          countOfAllUsers={this.props.countOfAllUsers}
          countOfUsersOnPage={this.props.countOfUsersOnPage}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
        />
        {this.props.isLoadingPage ? (
          <Loading />
        ) : (
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isWaitingFollow={this.props.isWaitingFollow}
            waitingFollowUserId={this.props.waitingFollowUserId}
          ></Users>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    countOfUsersOnPage: state.usersPage.countOfUsersOnPage,
    countOfPages: state.usersPage.countOfPages,
    currentPage: state.usersPage.currentPage,
    isLoadingPage: state.usersPage.isLoadingPage,
    countOfAllUsers: state.usersPage.countOfAllUsers,
    users: state.usersPage.users,
    isWaitingFollow: state.usersPage.isWaitingFollow,
    waitingFollowUserId: state.usersPage.waitingFollowUserId,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  isLoading,
  getUsers,
})(UsersClassComponent);

export default UsersContainer;
