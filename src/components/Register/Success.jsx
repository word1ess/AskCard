import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <img src="image/svgicons/ok.svg"></img>
      <h1>Успешно!</h1>
      <NavLink to="/" className="success__btn">
        Перейти на главную
      </NavLink>
    </div>
  );
};

export default Success;
