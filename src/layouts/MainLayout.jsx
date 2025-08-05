import { Outlet } from "react-router";

// component Global
import NavbarComponent from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>{<Outlet />}</main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
