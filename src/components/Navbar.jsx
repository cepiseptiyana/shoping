import { useState } from "react";
import feather from "feather-icons";

import { Link } from "react-router";

// style
import style from "./style/navbar.module.css";

const NavbarComponent = () => {
  const [close, setClose] = useState(true);

  return (
    <>
      <nav className={style.nav}>
        <header className={style.header}>
          <h1>shopping</h1>
        </header>

        <ul className={`${style.wraper} ${!close ? "" : style.hide}`}>
          <li className={style.item}>
            <Link to="/">home</Link>
          </li>
          <li className={style.item}>
            <Link to="/products">products</Link>
          </li>
          <li className={style.item}>
            <a href="product">about</a>
          </li>
        </ul>

        <figure className={style.figure}>
          <span
            className={style.cart}
            dangerouslySetInnerHTML={{
              __html: feather.icons["shopping-cart"].toSvg(),
            }}
          />

          <span
            className={style.close}
            dangerouslySetInnerHTML={{
              __html: !close
                ? feather.icons["x"].toSvg()
                : feather.icons["menu"].toSvg(),
            }}
            onClick={() => setClose(!close)}
          />
        </figure>
      </nav>
    </>
  );
};
export default NavbarComponent;
