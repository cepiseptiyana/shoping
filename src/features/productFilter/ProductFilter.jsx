// features components
import { useEffect, useState } from "react";

// components
import Products from "./components/Products.jsx";
import Filter from "./components/Filter.jsx";
import Pagination from "./components/Pagination.jsx";
import ShowFilter from "./components/ShowFilter.jsx";
import ShowSort from "./components/ShowSort.jsx";
import Loading from "../../components/loading/Loading.jsx";

// style
import style_container from "./style/container.module.css";
import style_header from "./style/header.module.css";
import style_categories from "./style/categories.module.css";
import style_filter from "./style/filter.module.css";
import style_product from "./style/product.module.css";

// // assets
// import loader from "@/assets/loading.gif";

const ProductFilters = (props) => {
  const {
    dispatch,
    navigate,
    selector,
    fetchCombinedData,
    resetData,
    feather,
    icons,
    setSortOption,
    setFilterCheckbox,
    setPage,
  } = props;
  const { data, dataFilter, loading, error, currentPage, limit, total } =
    selector;

  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [option, setOption] = useState("");
  const totalPages = Math.ceil(total / limit);

  // jumlah angka button yang di tampilkan
  const pageGroupSize = 5;
  const groupIndex = Math.floor(currentPage / pageGroupSize);
  const startPage = groupIndex * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    dispatch(fetchCombinedData({ limit, skip }));

    return () => {
      dispatch(resetData()); // ✅ Cleanup: reset saat unmount
    };
  }, [dispatch, currentPage, limit]);

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) dispatch(setPage(page));
  }

  function handleShowFilter() {
    setShowFilter(!showFilter);
  }

  function handleShowSort() {
    setShowSort(!showSort);
  }

  function handleChangeSort(e) {
    setOption(e.target.value);
    dispatch(setSortOption(e.target.value));
  }

  function handleFilterProducts(name, checked) {
    dispatch(setFilterCheckbox({ name, checked }));
  }

  function handleToDetail(data) {
    navigate(`/detail/${data.id}`);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) return <p style={{ paddingTop: "100px" }}>Error: {error}</p>;

  return (
    <>
      <section className={style_container.container}>
        <div className={style_header.title}>
          <ShowFilter
            handleShowFilter={handleShowFilter}
            showFilter={showFilter}
            style_header={style_header}
            feather={feather}
          />

          <ShowSort
            handleShowSort={handleShowSort}
            style_header={style_header}
            feather={feather}
            showSort={showSort}
            option={option}
            handleChangeSort={handleChangeSort}
          />
        </div>

        <div className={style_categories.categories}>
          <Filter
            handleShowFilter={handleShowFilter}
            showFilter={showFilter}
            style_filter={style_filter}
            icons={icons}
            handleFilterProducts={handleFilterProducts}
          />

          <div className={style_product.wraper_product}>
            <Products
              data={data}
              style_product={style_product}
              dataFilter={dataFilter}
              handleToDetail={handleToDetail}
            />

            {/* navigasi */}
            {dataFilter.length === 0 && (
              <Pagination
                startPage={startPage}
                endPage={endPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFilters;
