import style from "../style/alertLogin.module.css";

const AlertLogin = ({ alert }) => {
  return <h1 className={style.header}>{alert}</h1>;
};

export default AlertLogin;
