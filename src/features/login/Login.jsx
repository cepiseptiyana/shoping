// componenst
import { useState } from "react";
// import Validation from "./alert/Validation.jsx";
import alertLogin from "../../components/alert/alertLogins.js";

// router
import { Link, useNavigate } from "react-router";

// Assets
import image from "@/assets/loginImage.jpg";
import gmail from "@/assets/gmail.svg";
import github from "@/assets/github.svg";

// style
import style from "./style/login.module.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { handleAlert, clearAlert } from "../../middleware/alert/alert.js";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { alertLog } = useSelector((state) => state.alertLogin);
  const dispatch = useDispatch();

  async function handleForm(e) {
    e.preventDefault();

    if (email.length > 3 && password.length > 3) {
      try {
        // "https://shopping-api-omega.vercel.app/login"
        const res = await fetch("https://shopping-api-omega.vercel.app/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const result = await res.json();
        if (!res.ok) {
          alertLogin("failed", result.message, "error");
          return;
        }

        dispatch(handleAlert({ message: result.message }));
        localStorage.setItem("userProfile", JSON.stringify(result));
        navigate("/");

        setTimeout(() => {
          dispatch(clearAlert());
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    } else {
      alertLogin("warning", "isi dengan lengkap", "warning");
    }
  }

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
        <form action="" onSubmit={handleForm}>
          <div className={style.header}>
            Don't have an account ?{" "}
            <Link to="/register" className={style.register}>
              register
            </Link>
          </div>

          {/* {alertLog.length != 0 && <Validation validasi={alertLog} />} */}

          <h1>sign in to Shooping</h1>
          <p>Enter your detail below.</p>

          <ul className={style.wraperInput}>
            <li>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
