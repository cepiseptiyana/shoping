import { useEffect, useState } from "react";

// loading
import Loading from "@/components/loading/Loading.jsx";

import Header from "./components/Header";
import Card from "./components/Card";
import Checkout from "./components/Order";

import style from "./style/container.module.css";
import feather from "feather-icons";

// redux
import {
  fetchItems,
  update_items,
} from "@/middleware/myProducts/myProductsThunk.js";
import {
  clear,
  handleQuantityPlusRedux,
  handleQuantityMinRedux,
  handle_disabled,
  handle_disabled_false,
} from "../../middleware/myProducts/myProductsSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const userProfileStorage = JSON.parse(localStorage.getItem("userProfile"));
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.myProducts);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // kalo user udah login
    // kalo belum tidak dispatch
    if (userProfileStorage !== null) {
      dispatch(fetchItems(userProfileStorage.account_id));
    }

    console.log(items);

    return () => {
      console.log("clear");
      dispatch(clear());
    };
  }, []);

  function handleQuantityMin(id, quantity) {
    if (quantity > 1) {
      dispatch(handleQuantityMinRedux({ id, quantity }));
    }
  }

  function handleQuantityPlus(id, quantity, stock) {
    if (quantity < stock) {
      dispatch(handleQuantityPlusRedux({ id }));
    }
  }

  async function handleUpdateQuantity(id, quantity, account_id) {
    try {
      // Disable tombol/field
      dispatch(handle_disabled({ id }));

      // Tunggu hasil update
      await dispatch(update_items({ id, quantity, account_id })).unwrap();

      // Kalau sukses, enable lagi
      dispatch(handle_disabled_false({ id }));
    } catch (error) {
      console.error("Update gagal:", error);
      // Kalau gagal, tetap enable lagi supaya user bisa coba ulang
      dispatch(handle_disabled_false({ id }));
    }
  }

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className={style.container}>
        <Header />

        {items.length !== 0 && (
          <div className={style.wraper}>
            <Card
              feather={feather}
              items={items}
              setQuantity={setQuantity}
              handleQuantityMin={handleQuantityMin}
              handleQuantityPlus={handleQuantityPlus}
              handleUpdateQuantity={handleUpdateQuantity}
            />
            <Checkout />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
