// componenst
import { useState } from "react";
import Card from "./components/Card";

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

  function handleChangeUsername(value) {
    setUsername(value);
  }

  function handleChangePassword(value) {
    setPassword(value);
  }

  function handleChangeEmail(value) {
    setEmail(value);
  }

  function handleShowTabsInput(value) {
    setShowTabsInput(value);
  }

  function handleIsLogin(value) {
    setIstLogin(value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    // console.log(isLogin);

    if (isLogin) {
      //   dispatch(fetchLogin({ username, password }));
      if (username === "emilys" && password === "emilyspass") {
        useNavigate("/");
      }
    } else {
      // Validasi username
      if (!username.trim()) {
        alert("Username wajib diisi");
        return;
      }
      if (username.length < 3) {
        alert("Username minimal 3 karakter");
        return;
      }

      // Validasi email
      if (!email.trim()) {
        alert("Email wajib diisi");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Format email tidak valid");
        return;
      }

      // Validasi password
      if (!password.trim()) {
        alert("Password wajib diisi");
        return;
      }
      if (password.length < 6) {
        alert("Password minimal 6 karakter");
        return;
      }

      // Kalau semua validasi lolos
      dispatch(fetchRegister({ username, email, password }));
    }
  }

  return (
    <section className={style.container}>
      <Card
        style={style}
        username={username}
        password={password}
        email={email}
        showTabsInput={showTabsInput}
        handleOnSubmit={handleOnSubmit}
        handleIsLogin={handleIsLogin}
        handleChangeUsername={handleChangeUsername}
        handleChangePassword={handleChangePassword}
        handleChangeEmail={handleChangeEmail}
        handleShowTabsInput={handleShowTabsInput}
      />
    </section>
  );
};

export default Login;
