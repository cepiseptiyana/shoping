const List = (props) => {
  const { icons, style } = props;

  const list = icons.map((data, index) => {
    return (
      <li key={index} className={style.item}>
        <figure>
          <img src={data.image} alt="" className={style.image} />
          <figcaption className={style.caption}>{data.name}</figcaption>
        </figure>
      </li>
    );
  });

  return <ul className={style.wraper}>{list}</ul>;
};
export default List;
