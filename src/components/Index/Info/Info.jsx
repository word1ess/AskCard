import classes from "./Info.module.scss";
import InfoItem from "./InfoItem/InfoItem";
import cardOne from "./info-item-1.webp";
import cardTwo from "./info-item-2.webp";
import cardThree from "./info-item-3.webp";

const Info = (props) => {
  let infoContent = props.inner.items.map((item) => {
    <InfoItem title={item.title} text={item.text} image={item.png}></InfoItem>;
  });
  let images = [cardOne, cardTwo, cardThree];

  let arr = [];
  for (let i = 0; i < props.inner.items.length; i++) {
    arr.push(
      <InfoItem
        title={props.inner.items[i].title}
        text={props.inner.items[i].text}
        image={images[i]}
        order={props.inner.items[i].order}
      ></InfoItem>
    );
  }
  return (
    <section className="info">
      <div className="container">
        <div className="info__row">
          {/* {infoContent} */}
          {arr}
        </div>
      </div>
    </section>
  );
};

export default Info;
