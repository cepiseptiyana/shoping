const Card = (props) => {
  const { products, style } = props;
  const firstTen = products.value.slice(0, 10);
  const secondTen = products.value.slice(10, 20);

  const list = (datalist) => {
    return datalist.map((data) => {
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

            <button>details</button>
          </article>
        </li>
      );
    });
  };

  return (
    <>
      <ul className={style.wrapper}>{list(firstTen)}</ul>
      <ul className={style.wrapper}>{list(secondTen)}</ul>
    </>
  );
};

export default Card;
