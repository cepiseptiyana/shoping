import style from "../style/card.module.css";

const Card = (props) => {
  const { feather } = props;

  return (
    <div className={style.card}>
      <div className={style.wraperImage}>
        <h1>isi gambar di sini</h1>
        {/* <img src="" alt="" /> */}
        {/* <img src="" alt="" /> */}
      </div>

      <div className={style.wraperDetail}>
        <div className={style.wraperNameProduct}>
          <p>nama product</p>
          <p>harga product</p>
        </div>

        <div className={style.wraperIdr}>
          <p>ready to ship</p>
          <p>IDR</p>
        </div>

        <div className={style.wraperSize}>
          <p>Size: </p>
        </div>

        <div className={style.wraperQuantity}>
          <div className={style.quantity}>
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons["minus"].toSvg({ width: "15px" }),
              }}
            ></div>
            <input type="text" />
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons["plus"].toSvg({ width: "15px" }),
              }}
            ></div>
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons["trash-2"].toSvg(),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
