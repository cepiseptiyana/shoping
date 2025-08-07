import { useParams } from "react-router";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/middleware/combineData/combineDataThunk.js";
import { useEffect, useState } from "react";

// components
import StatusImage from "./components/StatusImage";
import DetailCart from "./components/DetailCart";
import Loading from "../../components/loading/Loading";

// style
import style from "./style/style.module.css";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loadingDetail } = useSelector((state) => state.productDetail);

  const [size, setSize] = useState("");
  const [quantity, setquantity] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  function handleChangeSize(e) {
    setSize(e.target.value);
  }

  function handleChangeQuantity(e) {
    setquantity(e.target.value);
  }

  function handleAddToCart(e) {
    e.preventDefault();
  }

  function handleAddQuantity(e) {
    if (quantity < data.stock) setquantity((prev) => prev + 1);
  }

  function handleReduceQuantity(e) {
    if (quantity > 0) setquantity((prev) => prev - 1);
  }

  if (loadingDetail) {
    return <Loading />;
  }

  console.log(data);

  return (
    <section className={style.container}>
      <header className={style.header}>
        <h1>{data.title}</h1>
      </header>

      <div className={style.dataPayments}>
        <StatusImage data={data} />
        <DetailCart
          data={data}
          handleChangeSize={handleChangeSize}
          handleChangeQuantity={handleChangeQuantity}
          handleAddToCart={handleAddToCart}
          size={size}
          quantity={quantity}
          handleAddQuantity={handleAddQuantity}
          handleReduceQuantity={handleReduceQuantity}
        />
      </div>
    </section>
  );
};

export default DetailProduct;
