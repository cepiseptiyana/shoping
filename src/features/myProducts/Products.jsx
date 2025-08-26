import Header from "./components/Header";
import Card from "./components/Card";
import Order from "./components/Order";

import style from "./style/container.module.css";
import feather from "feather-icons";

const Products = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={style.wraper}>
          <Card feather={feather} />
          <Order />
        </div>
      </div>
    </>
  );
};

export default Products;
