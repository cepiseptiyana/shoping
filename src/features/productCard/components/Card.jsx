const Card = (props) => {
  const { products, style, handleNavigasi } = props;
  // console.log(products);

  const list = products.map((data) => {
    return (
      <li key={data.id} className={style.item}>
        <article className={style.article}>
          <figure>
            <img src={data.thumbnail} alt={data.title} />
          </figure>

          <header>
            <h1>{data.title}</h1>
          </header>

          <p>{data.brand}</p>
          <p className={style.price}>${data.price}</p>

          <button onClick={() => handleNavigasi(data)}>details</button>
        </article>
      </li>
    );
  });

  return (
    <>
      <ul className={style.wrapper}>{list}</ul>
    </>
  );
};

export default Card;
