import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isUserAuth: state.auth.isAuth,
  };
};

export const withUserAuth = (Component) => {
  class CreatedComponentWithRedirect extends React.Component {
    render() {
      // if (!this.props.isUserAuth) return <Navigate to={"/login"}></Navigate>;
      return <Component {...this.props}></Component>;
    }
  }

  let connectedComponentWithRedirect = connect(mapStateToProps)(
    CreatedComponentWithRedirect
  );
  return connectedComponentWithRedirect;
};
