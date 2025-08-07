// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/middleware/combineData/combineDataSlice.js";
import { fetchCombinedData } from "@/middleware/combineData/combineDataThunk.js";

// react router
import { useNavigate } from "react-router";

// components
import Card from "./components/Card";

// global hooks
import { useProduct } from "@/hooks/useProduct.js";

// style
import style from "./style/productCard.module.css";

const ProductCard = () => {
  const products = useProduct();
  const navigate = useNavigate();

  function handleNavigasi(data) {
    navigate(`/detail/${data.id}`);
    console.log(data.id);
  }

  return (
    <>
      <section className={style.container}>
        <header className={style.header}>
          <h1>categories</h1>
        </header>
        <Card
          products={products}
          style={style}
          handleNavigasi={handleNavigasi}
        />
      </section>
    </>
  );
};

export default ProductCard;
