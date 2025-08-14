const List = (props) => {
  const { data, style_product, handleToDetail } = props;
  console.log(data);

  const dataSr = data.map((data, index) => {
    return (
      <li key={index} className={style_product.item}>
        <figure>
          <img src={data.thumbnail} alt="" title={data.title} />
        </figure>
        <div className={style_product.description}>{data.description}</div>
        <button
          onClick={() => handleToDetail(data)}
          className={style_product.button}
        >
          detail
        </button>
      </li>
    );
  });

  return dataSr;
};

export default List;
