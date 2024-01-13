import "./Header.scss";

import React from "react";
import { connect } from "react-redux";
import { isUserAuthorized } from "../../redux/authReducer";

import Header from "./Header";

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.isUserAuthorized();
  }
  render() {
    return <Header {...this.props}></Header>;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { isUserAuthorized })(HeaderComponent);
