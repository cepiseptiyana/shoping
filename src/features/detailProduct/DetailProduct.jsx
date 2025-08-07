import { useParams } from "react-router";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/middleware/combineData/combineDataThunk.js";
import { useEffect } from "react";

// components
import StatusImage from "./components/StatusImage";
import DetailCart from "./components/DetailCart";

// style
import style from "./style/style.module.css";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <section className={style.container}>
      <header className={style.header}>
        <h1>{data.title}</h1>
      </header>

      <div className={style.wraperData}>
        <StatusImage data={data} style={style} />
        <DetailCart data={data} style={style} />
      </div>
    </section>
  );
};

export default DetailProduct;
