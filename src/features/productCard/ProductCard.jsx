// components
import Card from "./components/Card";

// global hooks
import { useProduct } from "@/hooks/useProduct.js";

// style
import style from "./style/productCard.module.css";

const ProductCard = () => {
  const products = useProduct();

  return (
    <>
      <section className={style.container}>
        <header className={style.header}>
          <h1>categories</h1>
        </header>
        <Card products={products} style={style} />
      </section>
    </>
  );
};

export default ProductCard;
