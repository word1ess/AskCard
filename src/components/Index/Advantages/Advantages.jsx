import Advantage from "./Advantage/Advantage";
import classes from "./Advantages.module.scss";
import cardOne from "./advantages-icon-1.webp";
import cardTwo from "./advantages-icon-2.webp";
import cardThree from "./advantages-icon-3.webp";
let images = [cardOne, cardTwo, cardThree];
const Advantages = (props) => {
  //   let advantagesContent = props.inner.advantage.map((advantage) => {
  //     <Advantage
  //       title={advantage.title}
  //       text={advantage.text}
  //       bgImage={advantage.bgImage}
  //       waveImg={advantage.waveImg}
  //     ></Advantage>;
  //   });
  let arr = [];
  for (let i = 0; i < props.inner.advantage.length; i++) {
    arr.push(
      <Advantage
        title={props.inner.advantage[i].title}
        text={props.inner.advantage[i].text}
        bgImage={images[i]}
        waveImg={props.inner.advantage[i].waveImg}
      ></Advantage>
    );
  }
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__row">
          <h2 className="advantages__title">{props.inner.title}</h2>
          <div className="advantages__items items-advantages">
            {/* {advantagesContent} */}
            {arr}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
