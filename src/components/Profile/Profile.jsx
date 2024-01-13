import "./Profile.scss";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Loading from "../Common/Loading/Loading";
import React from "react";
import { connect } from "react-redux";
import { getProfileInfo } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withUserAuth } from "../../hoc/withUserAuth";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileInfo(
      this.props.router.params.userId || this.props.currentUserId
    );
  }

  render() {
    return (
      <div className="content__main">
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <>
            <ProfileInfo profileInfo={this.props.profileInfo} />
            <MyPostsContainer />
          </>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    currentUserId: state.profilePage.currentUserId,
    isLoading: state.profilePage.isLoadingPage,
    props: { ...state },
  };
};

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigation = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigation, params }}
      ></Component>
    );
  }

  return ComponentWithRouterProps;
}

export default compose(
  withRouter,
  withUserAuth,
  connect(mapStateToProps, { getProfileInfo })
)(ProfileContainer);
