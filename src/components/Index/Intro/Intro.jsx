import "./Intro.scss";
import introBg from "./bg.png";

const Intro = (props) => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__container">
          <div className="intro-bg">
            <div className="intro-bg__container">
              <img src={introBg} alt="intro-bg__img" />
            </div>
          </div>
          <div className="intro__row">
            <h1 className="intro__title">
              Взгляните <br /> на тесты{" "}
              <span className="intro__new">по-новому</span>
            </h1>
            <p className="intro__subtitle">{props.inner.subtitle}</p>
            <div className="intro__btns-row">
              <a
                href={props.inner.buttons[0].link}
                className={`intro__btn ${props.inner.buttons[0].style}`}
              >
                {props.inner.buttons[0].text}
              </a>
              <a
                href={props.inner.buttons[1].link}
                className={`intro__btn ${props.inner.buttons[1].style}`}
              >
                {props.inner.buttons[1].text}
              </a>
            </div>
          </div>
          <div className="intro__scroll">
            <div className="intro__scroll-mouse"></div>
            <div className="intro__scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
