import HeaderComponent from "../Header/HeaderComponent";
import Aside from "../Aside/Aside";

import { Outlet } from "react-router-dom";
const Layout = (props) => {
  return (
    <>
      <HeaderComponent />
      <main className="content">
        <div className="content__row">
          <Aside />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
