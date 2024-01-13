import React from "react";
import classes from "./Dialog.module.scss";
import MessagesContainer from "./Messages/MessagesContainer";
import MembersContainer from "./Members/MembersContainer";
import { connect } from "react-redux";
import { withUserAuth } from "../../hoc/withUserAuth";
import { compose } from "redux";

class DialogsContainer extends React.Component {
  render() {
    return (
      <div className={classes.content__dialog}>
        <h2 className={classes.title}>Dialogs</h2>
        <div className={classes.dialog__row}>
          <MembersContainer />
          <MessagesContainer />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    props: { ...state },
  };
};

export default compose(
  withUserAuth,
  connect(mapStateToProps)
)(DialogsContainer);
