import { useEffect, useState } from "react";
import feather from "feather-icons";

// components
import AlertLogin from "./alert/AlertLogin";

// hooks
import { useUser } from "./hooks/useUser";

// router
import { Link } from "react-router";

// style
import style from "./style/navbar.module.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  totalCheckout,
  reduceQuantity,
  changeQuantity,
  resetTotalCheckouts,
} from "@/middleware/combineData/cartDataSlice.js";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const { alertLog, user } = useSelector((state) => state.alertLogin);
  const [closeFilter, setCloseFilter] = useState(false);

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
                dispatch(resetTotalCheckouts());
              }}
            />
          </figure>

          {user.length == 0 ? (
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
              <div className={style.register}>
                <div className={style.link}>logout</div>
              </div>
              <div className={style.login}>
                <div className={style.link} to="/">
                  {user}
                </div>
              </div>
            </div>
          )}
        </div>

        {alertLog.length != 0 && <AlertLogin alert={alertLog} />}

        {/* <Cart
          showTotalCheckout={showTotalCheckout}
          showCart={showCart}
          translatecss={translatecss}
          data={data}
          empty={empty}
          totalCheckouts={totalCheckouts}
          totalCheckoutsButton={totalCheckoutsButton}
          handleChangeQuantity={handleChangeQuantity}
          handleTranslateDelete={handleTranslateDelete}
          handleAddQuantity={handleAddQuantity}
          handleReduceQuantity={handleReduceQuantity}
          handleTotalCheckout={handleTotalCheckout}
        /> */}
      </nav>
    </>
  );
};
export default NavbarComponent;
