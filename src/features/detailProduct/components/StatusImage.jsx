const StatusImage = (props) => {
  const { data, style } = props;
  console.log(data);

  return (
    <div className={style.wraperImage}>
      <header className={style.header}>
        <p>general info</p>
        <p>
          price <sup className={style.sup}>{data.price}</sup>
        </p>
      </header>

      <img src={data.image} alt="" />
    </div>
  );
};
export default StatusImage;
