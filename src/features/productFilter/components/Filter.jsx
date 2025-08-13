import feather from "feather-icons";

const Filter = (props) => {
  const {
    handleFilterProducts,
    style_filter,
    showFilter,
    icons,
    handleShowFilter,
  } = props;

  const list = icons.map((data, index) => {
    return (
      <label key={index} className={style_filter.checkboxWrapper}>
        <input
          type="checkbox"
          name={data.name}
          id={data.name}
          value={data.kategory}
          onClick={(e) =>
            handleFilterProducts(e.target.value, e.target.checked)
          }
        />
        <span className={style_filter.customBox}></span>
        {data.name}
      </label>
    );
  });

  return (
    <div
      className={`${style_filter.wraperForm} ${
        showFilter ? style_filter.slide : ""
      }`}
    >
      <header className={style_filter.header}>
        <h1>categories</h1>
        <span
          className={style_filter.close}
          dangerouslySetInnerHTML={{
            __html: feather.icons["x"].toSvg(),
          }}
          onClick={handleShowFilter}
        />
      </header>

      <form action="" className={style_filter.wraper}>
        {list}
      </form>
    </div>
  );
};

export default Filter;
