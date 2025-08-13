// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCombinedData } from "@/middleware/combineData/combineDataThunk.js";
import {
  setPage,
  setSortOption,
  setFilter,
  setDeleteFilter,
  resetData,
} from "@/middleware/combineData/combineDataSlice.js";

// react router
import { useNavigate } from "react-router";

// components
import Card from "./components/Card";
import Loading from "../../components/loading/Loading";

// style
import style from "./style/productCard.module.css";

const ProductCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, limit } = useSelector((state) => state.combinedData);

  useEffect(() => {
    dispatch(fetchCombinedData({ limit, skip: 0 }));

    return () => {
      dispatch(resetData()); // ✅ Cleanup: reset saat unmount
    };
  }, [dispatch, limit]);

  function handleNavigasi(data) {
    navigate(`/detail/${data.id}`);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className={style.container}>
        <header className={style.header}>
          <h1>categories</h1>
        </header>
        <Card products={data} style={style} handleNavigasi={handleNavigasi} />
      </section>
    </>
  );
};

export default ProductCard;
