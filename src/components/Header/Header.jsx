import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
