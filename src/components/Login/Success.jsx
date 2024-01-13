import { NavLink } from "react-router-dom";

const Success = () => {
    return (
        <div className="success">
            <img src="image/svgicons/ok.svg"></img>
            <h1>Успешно!</h1>
            <NavLink to="/research" className="success__btn">Перейти к исследованиям</NavLink>
        </div>
    );
};

export default Success;