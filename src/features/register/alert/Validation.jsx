import style from "../style/validateAlert.module.css";

const Validation = ({ validasi }) => {
  return <h1 className={style.header}>{validasi}</h1>;
};

export default Validation;
