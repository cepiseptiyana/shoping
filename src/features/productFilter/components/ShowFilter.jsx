const ShowFilter = (props) => {
  const { handleShowFilter, showFilter, style_header, feather } = props;

  return (
    <div className={style_header.filter} onClick={handleShowFilter}>
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
  );
};

export default ShowFilter;
