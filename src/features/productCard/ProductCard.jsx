// react
import { useEffect } from "react";

// components
import Card from "./components/Card";
import Loading from "../../components/loading/Loading";

// style
import style from "./style/productCard.module.css";

const ProductCard = (props) => {
  const { fetchCombinedData, dispatch, navigate, useSelector, resetData } =
    props;

  const { data, loading, limit } = useSelector((state) => state.combinedData);

  useEffect(() => {
    dispatch(fetchCombinedData({ limit, skip: 0 }));

    // return () => {
    //   dispatch(resetData()); // ✅ Cleanup: reset saat unmount
    // };
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
          <h1>My Products</h1>
        </header>

        <Card products={data} style={style} handleNavigasi={handleNavigasi} />
      </section>
    </>
  );
};

export default ProductCard;
