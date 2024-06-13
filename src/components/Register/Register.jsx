import React from "react";
import { NavLink } from "react-router-dom";

import "./Login.scss";
import { userRegistarionAC } from "../../redux/authReducer";

const Register = () => {
  let emailInput = React.createRef();
  let loginInput = React.createRef();
  let passwordInput = React.createRef();
  function registerUser(e) {
    e.preventDefault();
    userRegistarionAC(emailInput.value, loginInput.value, passwordInput.value);
  }
  return (
    <main className="content bg">
      <div className="container">
        <div className="login">
          <h1>Регистрация</h1>
          <form className="login__inputs" action={registerUser}>
            <div className="login__input">
              <label>Логин</label>
              <input name="name" type="text" ref={loginInput}></input>
            </div>
            <div className="login__input">
              <label>Email</label>
              <input name="email" ref={emailInput}></input>
            </div>
            <div className="login__input passwd">
              <div>
                <label>Пароль</label>
                <input
                  type={"password"}
                  name="password"
                  ref={passwordInput}
                ></input>
              </div>
            </div>
            <button className="login__btn" type="submit">
              Зарегистрироваться
            </button>
            <div className="login__register">
              Уже есть аккаунт? <NavLink to="/login">Войти</NavLink>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
