const ShowFilter = (props) => {
  const { handleShowFilter, showFilter, style_header, feather } = props;

  return (
    <div className={style_header.filter} onClick={handleShowFilter}>
      <span
        className={style_header.span}
        dangerouslySetInnerHTML={{
          __html: showFilter
            ? feather.icons["x"].toSvg()
            : feather.icons["list"].toSvg(),
        }}
      ></span>
      <h1>show filters</h1>
    </div>
  );
};

export default ShowFilter;
