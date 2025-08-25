// componenst
import { useState } from "react";

// router
import { Link } from "react-router";

// Assets
import image from "@/assets/loginImage.jpg";
import gmail from "@/assets/gmail.svg";
import github from "@/assets/github.svg";

// router
import { useNavigate } from "react-router";

// style
import style from "./style/login.module.css";

// redux
import { useDispatch } from "react-redux";
import {
  fetchLogin,
  fetchRegister,
} from "../../middleware/combineData/combineDataThunk";

const Login = () => {
  const [isLogin, setIstLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showTabsInput, setShowTabsInput] = useState(true);

  const dispatch = useDispatch();

  return (
    <section className={style.container}>
      <div className={style.wraperLeft}>
        <div className={style.wraperImage}>
          <h1>shooping</h1>
          <h1>Hi, Welcome Back</h1>
          <img src={image} alt="" />
        </div>
      </div>

      <div className={style.wraperRight}>
        <form action="">
          <div className={style.header}>
            Don't have an account ?{" "}
            <Link to="/register" className={style.register}>
              register
            </Link>
          </div>

          <h1>sign in to Shooping</h1>
          <p>Enter your detail below.</p>

          <ul className={style.wraperInput}>
            <li>
              <input type="email" placeholder="Email Address" />
            </li>
            <li>
              <input type="password" placeholder="Password" />
            </li>
          </ul>

          <div className={style.provider}>
            <img src={gmail} alt="" />
            <img src={github} alt="" />
          </div>

          <button type="subnit">login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
