import style from "./style/aside.module.css";

// components
import List from "./components/List";
import TotalCheckout from "./components/TotalCheckout";

const Cart = (props) => {
  const {
    data,
    empty,
    showCart,
    handleChangeQuantity,
    handleAddQuantity,
    handleReduceQuantity,
    handleTotalCheckout,
    totalCheckoutsButton,
    handleTranslateDelete,
    translatecss,
    totalCheckouts,
    showTotalCheckout,
  } = props;

  return (
    showCart && (
      <aside className={style.container}>
        <List
          handleChangeQuantity={handleChangeQuantity}
          data={data}
          empty={empty}
          handleAddQuantity={handleAddQuantity}
          handleTotalCheckout={handleTotalCheckout}
          handleReduceQuantity={handleReduceQuantity}
          handleTranslateDelete={handleTranslateDelete}
          translatecss={translatecss}
        />

        {showTotalCheckout && (
          <TotalCheckout
            totalCheckoutsButton={totalCheckoutsButton}
            totalCheckouts={totalCheckouts}
          />
        )}
      </aside>
    )
  );
};

export default Cart;
