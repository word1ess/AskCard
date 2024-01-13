import React from "react";
import "./Game.scss";
import { connect } from "react-redux";
import {
  getGameData,
  checkUserAnswer,
  endOfTest,
  renderNextQuestion,
} from "../../redux/gameReducer";
import { compose } from "redux";
import GameUI from "./GameUI/GameUI";

class GameContainer extends React.Component {
  componentDidMount() {
    this.props.getGameData(20, 1);
  }
  render() {
    return (
      <GameUI
        userStats={this.props.userStats}
        catalog={this.props.catalog}
        userName={this.props.userName}
        checkUserAnswer={this.props.checkUserAnswer}
        endOfTest={this.props.endOfTest}
        renderNextQuestion={this.props.renderNextQuestion}
      ></GameUI>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userStats: state.gamePage.userStats,
    catalog: state.gamePage.catalog,
    userName: state.profilePage.profileInfo.fullName,
  };
};

export default compose(
  connect(mapStateToProps, {
    getGameData,
    checkUserAnswer,
    endOfTest,
    renderNextQuestion,
  })
)(GameContainer);

// export default Game;
