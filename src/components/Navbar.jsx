import { useEffect, useState } from "react";
import feather from "feather-icons";

// components
import AlertLogin from "./alert/AlertLogin";

// router
import { Link } from "react-router";

// style
import style from "./style/navbar.module.css";

// redux
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const data = localStorage.getItem("userProfile");
  const parsedData = JSON.parse(data);
  const { alertLog } = useSelector((state) => state.alertLogin);
  const [closeFilter, setCloseFilter] = useState(false);

  function handleLogout() {
    localStorage.removeItem("userProfile");
    window.location.reload();
  }

  return (
    <>
      <nav className={style.nav}>
        <header className={style.header}>
          <h1>shopping</h1>
        </header>

        <div className={style.wraperList}>
          <ul className={`${style.wraper} ${closeFilter ? style.hide : ""}`}>
            <li className={style.item}>
              <Link className={style.link} to="/">
                home
              </Link>
            </li>
            <li className={style.item}>
              <Link className={style.link} to="/products">
                products
              </Link>
            </li>
            <li className={style.item}>
              <Link className={style.link} to="/products">
                contact
              </Link>
            </li>
            <li className={style.item}>
              <Link className={style.link} to="/about">
                contact
              </Link>
            </li>
          </ul>

          <figure className={style.figure}>
            <span
              className={style.close}
              dangerouslySetInnerHTML={{
                __html: closeFilter
                  ? feather.icons["x"].toSvg()
                  : feather.icons["menu"].toSvg(),
              }}
              onClick={() => {
                setCloseFilter(!closeFilter);
              }}
            />
          </figure>

          {!parsedData ? (
            <div className={style.wraperLogin}>
              <div className={style.register}>
                <Link className={style.link} to="/register">
                  register
                </Link>
              </div>
              <div className={style.login}>
                <Link className={style.link} to="/login">
                  login
                </Link>
              </div>
            </div>
          ) : (
            <div className={style.wraperLogin}>
              <div className={style.login}>
                <div className={style.link} to="/">
                  {parsedData.username}
                </div>
              </div>

              <div className={style.register} onClick={handleLogout}>
                <div className={style.link}>logout</div>
              </div>
            </div>
          )}
        </div>

        {alertLog.length != 0 && <AlertLogin alert={alertLog} />}
      </nav>
    </>
  );
};
export default NavbarComponent;
