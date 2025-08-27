import { useEffect, useState } from "react";
import { useParams } from "react-router";

// sweetalert
import Swal from "sweetalert2";

// redux
import { useDispatch, useSelector } from "react-redux";

// thunk
import { fetchProductById } from "@/middleware/combineData/combineDataThunk.js";

// components
import StatusImage from "./components/StatusImage";
import DetailCart from "./components/DetailCart";
import Loading from "../../components/loading/Loading";

// style
import style from "./style/style.module.css";

const DetailProduct = () => {
  const userProfileStorage = JSON.parse(localStorage.getItem("userProfile"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loadingDetail } = useSelector((state) => state.productDetail);

  const [size, setSize] = useState("L");
  const [quantity, setquantity] = useState(0);
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  function showAlert(title, text) {
    Swal.fire({
      title: "warning!",
      text: text,
      icon: "warning",
      confirmButtonText: "OK",
    });
  }

  async function handleAddToCart(e) {
    e.preventDefault();

    const obectData = {
      id_barang: data.id,
      account_id,
      name: data.title,
      quantity,
      price: data.price,
      image: data.thumbnail,
      size,
      stock: data.stock,
      total_delivery: parseFloat(
        (parseFloat(delivery.price) * quantity).toFixed(2)
      ),
      type_delivery: delivery.type,
    };

    if (Object.keys(delivery).length == 0)
      return showAlert("warning!", "please choice delivery");

    if (userProfileStorage == null)
      return showAlert("warning!", "please login terlebih dahulu");

    console.log(userProfileStorage);

    // try {
    //   const response = await fetch("http://localhost:3000/addCart", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(obectData),
    //   });

    //   if (!response.ok) throw new Error(`HTTP error! status: ${res.status}`);

    //   const result = await response.json();
    //   // result.message = Added to cart successfully!
    //   showAlert("success", "Added to cart successfully!");
    // } catch (err) {
    //   showAlert("failed", "failed Added to cart!");
    // }
  }

  function handleChangeSize(e) {
    setSize(e.target.value);
  }

  function handleChangeDelivery({ price, type }) {
    setDelivery({ price, type });
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
