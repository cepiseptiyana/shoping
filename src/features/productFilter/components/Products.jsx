import { useEffect, useState } from "react";

// components
import List from "./List";

const Products = (props) => {
  const { data, dataFilter, style_product } = props;

  return (
    <>
      <ul className={style_product.wraper}>
        <List
          data={dataFilter.length !== 0 ? dataFilter : data}
          style_product={style_product}
        />
      </ul>
    </>
  );
};

export default Products;
