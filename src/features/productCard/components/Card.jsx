const Card = (props) => {
  const { products, style, handleNavigasi } = props;

  const list = products.value.map((data) => {
    return (
      <li key={data.id} className={style.item}>
        <article className={style.article}>
          <header>
            <h1>{data.title}</h1>
          </header>

          <figure>
            <img src={data.image} alt="" />
          </figure>

          <p>{data.title}</p>

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
