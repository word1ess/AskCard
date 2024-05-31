import classes from "./Aside.module.scss";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
const setActive = ({ isActive }) => (isActive ? classes.activeLink : "");

const Aside = (props) => {
  return (
    <aside className={classes.content__aside}>
      <div className={classes.content__aside__logo}>
        <NavLink to="/" className={setActive}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul>
        <NavLink to="/" className={setActive}>
          <li className={`${classes.item}`}>Главная</li>
        </NavLink>
        <NavLink to="/profile" className={setActive}>
          <li className={classes.item}>Профиль</li>
        </NavLink>
        <NavLink to="/users" className={setActive}>
          <li className={`${classes.item}`}>Пользователи</li>
        </NavLink>
        <NavLink to="/settings" className={setActive}>
          <li className={classes.item}>Настройки</li>
        </NavLink>
        <NavLink to="/game" className={setActive}>
          <li className={classes.item}>Игра</li>
        </NavLink>
        <NavLink to="/stats" className={setActive}>
          <li className={classes.item}>Статистика</li>
        </NavLink>
        <NavLink to="/exit" className={setActive}>
          <li className={classes.item}>Выход</li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Aside;
