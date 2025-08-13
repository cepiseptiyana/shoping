import style from "../style/return.module.css";

const Return = (props) => {
  const { data } = props;

  return (
    <div className={style.return}>
      <h1>return</h1>
      <p>
        you have 60 days to return the items using any of the following methods:{" "}
      </p>

      <ul>
        <li>{data.returnPolicy}</li>
      </ul>
    </div>
  );
};

export default Return;
