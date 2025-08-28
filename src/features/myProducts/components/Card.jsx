import style from "../style/card.module.css";
import { Fragment } from "react";

const Card = (props) => {
  const {
    feather,
    items,
    setQuantity,
    handleQuantityMin,
    handleQuantityPlus,
    handleUpdateQuantity,
  } = props;
  const data = items;

  const list = data.map((data, index) => {
    return (
      <ul key={index} className={style.wraper}>
        <div className={style.wraperImage}>
          <img src={data.image} alt="" />
        </div>

        <div className={style.wraperDetail}>
          <div className={style.wraperNameProduct}>
            <p>{data.name}</p>

            <div
              className={style.delete}
              dangerouslySetInnerHTML={{
                __html: feather.icons["trash-2"].toSvg(),
              }}
            ></div>
          </div>

          <div className={style.wraperSize}>
            <p>Size: {data.size} </p>
            <p>{data.type_delivery}</p>
            <p>${data.price}</p>
            <p>order: {data.quantity}</p>
          </div>

          <div className={style.wraperIdr}>
            <p>ready to ship</p>
            <p>${data.total_delivery}</p>
          </div>

          <div className={style.wraperQuantity}>
            <div className={style.quantity}>
              <div
                dangerouslySetInnerHTML={{
                  __html: feather.icons["minus"].toSvg({ width: "15px" }),
                }}
                onClick={() => handleQuantityMin(data.id, data.quantity)}
              ></div>
              <input
                type="text"
                value={data.quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: feather.icons["plus"].toSvg({ width: "15px" }),
                }}
                onClick={() =>
                  handleQuantityPlus(data.id, data.quantity, data.stock)
                }
              ></div>
            </div>

            <button
              onClick={() =>
                handleUpdateQuantity(data.id, data.quantity, data.account_id)
              }
              disabled={data.disabled}
            >
              {data.disabled ? "Please wait..." : "Update"}
            </button>
          </div>
        </div>
      </ul>
    );
  });

  return <div className={style.card}>{list}</div>;
};

export default Card;
