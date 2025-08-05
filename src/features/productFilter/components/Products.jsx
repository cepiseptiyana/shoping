import { useState } from "react";

// components
import CurrentProduct from "./CurrentProduct";
import Pagination from "./Pagination";

const Products = (props) => {
  const {
    totalPages,
    goToPage,
    endPage,
    startPage,
    products,
    style_product,
    currentPage,
    curentProduct,
  } = props;
  // console.log(dataFilter);
  // console.log(products);

  return (
    <>
      <div className={style_product.wraper_product}>
        <ul className={style_product.wraper}>
          <CurrentProduct
            curentProduct={products.length == 0 ? curentProduct : products}
            style_product={style_product}
          />
        </ul>

        {/* navigasi */}
        <Pagination
          goToPage={goToPage}
          currentPage={currentPage}
          startPage={startPage}
          endPage={endPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default Products;
