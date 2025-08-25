import style from "../style/regisAlert.module.css";

const RegisterSuccess = ({ register }) => {
  return <h1 className={style.header}>{register[0].message}</h1>;
};

export default RegisterSuccess;
