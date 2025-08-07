const List = (props) => {
  const { data, style_product } = props;

  const dataSr = data.map((data, index) => {
    return (
      <li key={index} className={style_product.item}>
        <figure>
          <img src={data.thumbnail} alt="" title={data.title} />
        </figure>

        <div className={style_product.description}>{data.description}</div>
      </li>
    );
  });

  return dataSr;
};

export default List;
