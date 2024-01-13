import React from "react";
import "../Game.scss";

const GameUI = (props) => {
  //Иннер и элменты для карточек;
  let cardResult = React.createRef();
  let cardAnswer = React.createRef();
  let cardInput = React.createRef();
  const afterSubmition = (event) => {
    event.preventDefault();
    props.checkUserAnswer(
      cardInput.current.value,
      props.catalog[props.userStats.indexOfAnswer].correctAnswer
    );
    props.userStats.indexOfAnswer == props.catalog.length - 1
      ? props.endOfTest(props.userStats.indexOfAnswer)
      : props.renderNextQuestion();
  };
  let showUserInfo = props.userStats.isShowResult
    ? props.userStats.showResult
    : props.catalog[props.userStats.indexOfAnswer].question;
  const returnUserAnswer = () => {};

  return (
    <>
      <div className="game-content">
        <section className="game-content__main main-game-content">
          <div className="main-game-content__row">
            <div className="main-game-content__header">
              <h2 className="main-game-content__title">
                Добрый день, {props.userName}
              </h2>
              <h3 className="main-game-content__subtitle">
                Желаем Вам успехов и высоких баллов
              </h3>
            </div>
            <div id="card" className="main-game-content__card card-main-game">
              <div className="card-main-game__inner">
                <div id="question" className="card-main-game__question">
                  {showUserInfo}
                </div>
                <div
                  id="result"
                  className={`card-main-game__result ${props.userStats.classForResult}`}
                  ref={cardResult}
                ></div>
                <div
                  id="answer"
                  className="card-main-game__answer"
                  ref={cardAnswer}
                >
                  {props.userStats.showAnswer}
                </div>
              </div>
              <div className="card-main-game__bottom-bar">
                <form
                  onSubmit={afterSubmition}
                  className="card-main-game__input"
                >
                  <input
                    id="card-input"
                    type="text"
                    className="card-main-game__input"
                    autoComplete="off"
                    ref={cardInput}
                    disabled={props.userStats.isShowResult}
                  />
                  <button
                    id="card-button"
                    type="sumbit"
                    className="btn-bg card-main-game__btn"
                    onClick={returnUserAnswer}
                    disabled={props.userStats.isShowResult}
                  >
                    Проверить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <aside id="info" className="game-content__right right-game-content">
          <div className="right-game-content__row">
            <div className="right-game-content__score">
              <div className="right-game-content__question">
                <span id="current-question">
                  {props.userStats.indexOfAnswer + 1}
                </span>
                /<span id="all-questions">{props.catalog.length}</span>
              </div>
              <div className="right-game-content__user-score">
                <div>
                  <span id="score">{props.userStats.userScore}/</span>
                  <span id="all-answer">{props.catalog.length}</span>
                </div>
              </div>
            </div>
            <div id="time" className="right-game-content__time"></div>
            <div
              id="best-player"
              className="right-game-content__best-player"
            ></div>
            <div
              id="list-players"
              className="right-game-content__list-players"
            ></div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default GameUI;
