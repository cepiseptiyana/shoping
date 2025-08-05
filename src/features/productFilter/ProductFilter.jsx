// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCombinedData } from "@/middleware/combineData/combineDataThunk.js";

// features components
import { useEffect, useState } from "react";

// feather
import feather from "feather-icons";

// components
import Products from "./components/Products.jsx";
import Filter from "./components/Filter";

// global hooks
import { useProduct } from "@/hooks/useProduct.js";

// global utils
import { icons } from "@/utils/icons";

// style
import style_container from "./style/container.module.css";
import style_header from "./style/header.module.css";
import style_categories from "./style/categories.module.css";
import style_filter from "./style/filter.module.css";
import style_product from "./style/product.module.css";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.combinedData);
  const [dataFilter, setDataFilter] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [showSort, setShowSort] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // current Product Index
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // current Product
  const curentProduct = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // current Product maxButton
  const maxPageButtons = 5;
  let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
  let endPage = startPage + maxPageButtons - 1;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // controlled component
  const [option, setOption] = useState("");

  useEffect(() => {
    dispatch(fetchCombinedData());
  }, [dispatch]);

  function onHandleFilterProducts(e) {
    if (e.target.checked == true) {
      const filter = data.filter((data) => data.category === e.target.value);
      setDataFilter([...dataFilter, ...filter]);
    } else if (e.target.checked == false) {
      // delete
      const deleted = dataFilter.filter(
        (data) => data.category !== e.target.value
      );
      setDataFilter(deleted);
      setFilterPage((prev) => prev - 1);
    }
  }

  // handleSort
  function handleSort(value) {
    setOption(value);

    const sorted = [...data];

    if (value === "populer") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (value === "rekomendasi") {
      sorted.sort(() => Math.random() - 0.5); // acak urutan
    }

    setDataFilter(sorted);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className={style_container.container}>
        <div className={style_header.title}>
          <div
            className={style_header.filter}
            onClick={() => setShowFilter(!showFilter)}
          >
            <span
              className={style_header.span}
              dangerouslySetInnerHTML={{
                __html:
                  showFilter == true
                    ? feather.icons["list"].toSvg()
                    : feather.icons["x"].toSvg(),
              }}
            ></span>
            <h1>show filters</h1>
          </div>

          <div
            className={style_header.sort}
            onClick={() => setShowSort(!showSort)}
          >
            <h1>Sort by Relevant </h1>
            <span
              className={style_header.span}
              dangerouslySetInnerHTML={{
                __html: feather.icons["chevron-down"].toSvg(),
              }}
            ></span>
          </div>

          {showSort == true ? (
            <div className={style_header.option}>
              <select
                name=""
                id=""
                value={option}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="populer">populer</option>
                <option value="rekomendasi">rekomendasi</option>
              </select>
            </div>
          ) : null}
        </div>

        <div className={style_categories.categories}>
          {showFilter == true ? (
            <Filter
              onHandleFilterProducts={onHandleFilterProducts}
              style_filter={style_filter}
              icons={icons}
            />
          ) : null}

          <Products
            totalPages={totalPages}
            goToPage={goToPage}
            currentPage={currentPage}
            startPage={startPage}
            endPage={endPage}
            curentProduct={curentProduct}
            products={dataFilter}
            style_product={style_product}
          />
        </div>
      </section>
    </>
  );
};

export default ProductFilters;
