const Filter = (props) => {
  const { handleFilterProducts, style_filter, icons } = props;

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
    <>
      <div className={style_filter.wraperForm}>
        <header className={style_filter.header}>
          <h1>categories</h1>
        </header>

        <form action="" className={style_filter.wraper}>
          {list}
        </form>
      </div>
    </>
  );
};

export default Filter;
