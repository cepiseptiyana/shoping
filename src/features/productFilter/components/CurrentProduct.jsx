const CurrentProduct = (props) => {
  const { curentProduct, style_product } = props;

  const data = curentProduct.map((data) => {
    return (
      <li key={data.id} className={style_product.item}>
        <figure>
          <img src={data.thumbnail} alt="" title={data.title} />
        </figure>

        <div className={style_product.description}>{data.description}</div>
      </li>
    );
  });

  return data;
};

export default CurrentProduct;
