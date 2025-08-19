import { useEffect, useState } from "react";
import feather from "feather-icons";

// components
import Cart from "./cart/Cart";

// hooks
import { useUser } from "./hooks/useUser";

import { href, Link } from "react-router";

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
  const { user, loading, error } = useUser();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [closeFilter, setCloseFilter] = useState(false);
  const { data, empty, totalCheckouts, totalCheckoutsButton, countCart } =
    useSelector((state) => state.cartData);

  const [translatecss, setTranslatecss] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showTotalCheckout, setShowTotalCheckout] = useState(false);

  useEffect(() => {
    if (user) setImage(user.picture);
  }, [user]);

  function handleAddQuantity(data) {
    const { quantity, id, size, delivery } = data;
    const incrementQuantity = quantity + 1;

    const totalDelivery = parseFloat((delivery * incrementQuantity).toFixed(2));
    dispatch(
      addQuantity({
        id,
        quantity: incrementQuantity,
        size,
        totalDelivery,
        checked,
        delivery,
      })
    );
  }

  function handleReduceQuantity(data) {
    const { quantity, id, size, delivery, totalDelivery } = data;
    const decrementQuantity = quantity - 1;

    const newTotalDelivery = parseFloat((totalDelivery - delivery).toFixed(2));
    dispatch(
      reduceQuantity({
        id,
        quantity: decrementQuantity,
        size,
        newTotalDelivery,
        checked,
        delivery,
      })
    );
  }

  function handleChangeQuantity(data, quantity) {
    const { id, size, delivery } = data;
    const totalDelivery = parseFloat((delivery * quantity).toFixed(2));
    dispatch(
      changeQuantity({ id, size, totalDelivery, quantity, checked, delivery })
    );
  }

  function handleTotalCheckout(event, id, size, delivery) {
    const checked = event.target.checked;
    setShowTotalCheckout(true);
    setChecked(checked);
    dispatch(totalCheckout({ id, size, checked, delivery }));
  }

  function handleTranslateDelete() {
    setTranslatecss(true);
  }

  return (
    <>
      <nav className={style.nav}>
        <header className={style.header}>
          <h1>shopping</h1>
        </header>

        <ul className={`${style.wraper} ${!closeFilter ? "" : style.hide}`}>
          <li className={style.item}>
            <Link to="/">home</Link>
          </li>
          <li className={style.item}>
            <Link to="/products">products</Link>
          </li>
          <li className={style.item}>
            <Link to="/products">contact</Link>
          </li>
          <li className={style.item}>
            <a href="product">about</a>
          </li>
        </ul>

        <figure className={style.figure}>
          <div className={style.cartWraper}>
            <span
              className={style.cart}
              dangerouslySetInnerHTML={{
                __html: feather.icons["shopping-cart"].toSvg(),
              }}
              onClick={() => {
                setShowCart(!showCart);
                setCloseFilter(false);
                dispatch(resetTotalCheckouts());
              }}
            />
            {countCart != 0 ? <p>{countCart}</p> : null}
          </div>

          <span
            className={style.close}
            dangerouslySetInnerHTML={{
              __html: closeFilter
                ? feather.icons["x"].toSvg()
                : feather.icons["menu"].toSvg(),
            }}
            onClick={() => {
              setShowCart(false);
              setCloseFilter(!closeFilter);
              dispatch(resetTotalCheckouts());
            }}
          />

          {!user && (
            <span
              dangerouslySetInnerHTML={{
                __html: feather.icons["log-in"].toSvg(),
              }}
              onClick={() => {
                window.location.href =
                  "https://login-auth0-iota.vercel.app/login";
                // window.location.href = "http://localhost:3000/login";
              }}
            />
          )}
        </figure>

        <div className={style.logout}>
          <Link to="/profile">
            <img
              src={
                user
                  ? image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
              width="30px"
            />
          </Link>

          {user && (
            <span
              dangerouslySetInnerHTML={{
                __html: feather.icons["log-out"].toSvg(),
              }}
              onClick={() => {
                window.location.href =
                  "https://login-auth0-iota.vercel.app/logout";
                // window.location.href = "http://localhost:3000/logout";
              }}
            />
          )}
        </div>

        <Cart
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
        />
      </nav>
    </>
  );
};
export default NavbarComponent;
