import { useEffect, useState } from "react";
import feather from "feather-icons";

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

// components
import Cart from "./cart/Cart";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const [closeFilter, setCloseFilter] = useState(false);
  const { data, empty, totalCheckouts, totalCheckoutsButton, countCart } =
    useSelector((state) => state.cartData);

  const [translatecss, setTranslatecss] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showTotalCheckout, setShowTotalCheckout] = useState(false);

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
        </figure>

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
