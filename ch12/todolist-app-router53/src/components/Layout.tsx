import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
