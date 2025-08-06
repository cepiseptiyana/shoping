const ShowSort = (props) => {
  const {
    handleShowSort,
    style_header,
    feather,
    showSort,
    option,
    handleChangeSort,
  } = props;

  return (
    <>
      <div className={style_header.sort} onClick={handleShowSort}>
        <h1>Sort by Relevant </h1>
        <span
          className={style_header.span}
          dangerouslySetInnerHTML={{
            __html: feather.icons["chevron-down"].toSvg(),
          }}
        ></span>
      </div>

      {showSort && (
        <div className={style_header.option}>
          <select name="" id="" value={option} onChange={handleChangeSort}>
            <option value="populer">populer</option>
            <option value="rekomendasi">rekomendasi</option>
          </select>
        </div>
      )}
    </>
  );
};

export default ShowSort;
