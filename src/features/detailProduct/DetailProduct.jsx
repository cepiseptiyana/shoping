import { useEffect, useState } from "react";
import { useParams } from "react-router";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "@/middleware/combineData/cartDataSlice.js";

// thunk
import { fetchProductById } from "@/middleware/combineData/combineDataThunk.js";

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

  const [size, setSize] = useState("L");
  const [quantity, setquantity] = useState(0);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  function handleAddToCart(e) {
    e.preventDefault();

    const obectData = {
      id: data.id,
      title: data.title,
      price: data.price,
      stock: data.stock,
      size,
      quantity,
      delivery: parseFloat(delivery),
      image: data.thumbnail,
      totalDelivery: parseFloat((parseFloat(delivery) * quantity).toFixed(2)),
    };

    if (delivery != 0) {
      dispatch(addCart(obectData));
    } else {
      alert("please choice delivery");
    }
  }

  function handleChangeSize(e) {
    setSize(e.target.value);
  }

  function handleChangeDelivery(value) {
    setDelivery(value);
  }

  function handleChangeQuantity(value) {
    if (value === "") return setquantity("");
    setquantity(parseInt(value));
  }

  function handleAddQuantity(quantity, id, size, price) {
    if (quantity < data.stock) setquantity((prev) => prev + 1);
  }

  function handleReduceQuantity(e) {
    if (quantity > 1) setquantity((prev) => prev - 1);
  }

  if (loadingDetail) {
    return <Loading />;
  }

  return (
    <section className={style.container}>
      <header className={style.header}>
        <h1>{data.title}</h1>
      </header>

      <div className={style.dataPayments}>
        <StatusImage data={data} />
        <DetailCart
          handleChangeDelivery={handleChangeDelivery}
          data={data}
          quantity={quantity}
          handleChangeSize={handleChangeSize}
          handleChangeQuantity={handleChangeQuantity}
          handleAddToCart={handleAddToCart}
          size={size}
          handleAddQuantity={handleAddQuantity}
          handleReduceQuantity={handleReduceQuantity}
        />
      </div>
    </section>
  );
};

export default DetailProduct;
