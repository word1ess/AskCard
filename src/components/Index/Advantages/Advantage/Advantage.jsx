import classes from "./Advantage.scss";
const Advantage = (props) => {
  console.log(props);
  return (
    <div className="advantages__item items-advantages__row">
      <div className="items-advantages__icon">
        <div className="items-advantages__icon-container">
          <img src={props.bgImage} alt="Подключайтесь" />
        </div>
      </div>
      <h3 className="items-advantages__title">{props.title}</h3>
      <p className="items-advantages__text">{props.text}</p>
      <a href="#" className="items-advantages__link btn-bg">
        Попробовать
      </a>
      <div className="items-advantages__wave">
        <img src={props.waveImg} alt="" />
      </div>
    </div>
  );
};

export default Advantage;
