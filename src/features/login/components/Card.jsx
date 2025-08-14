import image__Account from "@/assets/account.png";
import image__google from "@/assets/google.png";

import { useState } from "react";

// components
import Login from "./Login";
import Register from "./Register";

const Card = (props) => {
  const {
    style,
    username,
    email,
    password,
    showTabsInput,
    handleChangeUsername,
    handleChangePassword,
    handleChangeEmail,
    handleShowTabsInput,
    handleOnSubmit,
    handleIsLogin,
  } = props;

  const [cssTabsButtonLogin, setCssTabsButtonLogin] = useState(true);
  const [cssTabsButtonRegis, setCssTabsButtonRegis] = useState(false);

  return (
    <form
      action=""
      className={style.form}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <figure className={style.account}>
        <img src={image__Account} alt="" />
      </figure>

      <div className={style.tabs}>
        <button
          type="button"
          className={cssTabsButtonLogin ? style.tabButton : ""}
          onClick={() => {
            setCssTabsButtonLogin(true);
            setCssTabsButtonRegis(false);
            handleShowTabsInput(true);
            handleIsLogin(true);
          }}
        >
          login
        </button>
        <button
          type="button"
          className={cssTabsButtonRegis ? style.tabButton : ""}
          onClick={() => {
            setCssTabsButtonLogin(false);
            setCssTabsButtonRegis(true);
            handleShowTabsInput(false);
            handleIsLogin(false);
          }}
        >
          registrasi
        </button>
      </div>

      {showTabsInput ? (
        <Login
          style={style}
          username={username}
          password={password}
          handleChangeUsername={handleChangeUsername}
          handleChangePassword={handleChangePassword}
        />
      ) : (
        <Register
          style={style}
          username={username}
          password={password}
          email={email}
          handleChangeUsername={handleChangeUsername}
          handleChangePassword={handleChangePassword}
          handleChangeEmail={handleChangeEmail}
        />
      )}

      <div>
        <p>with your account google</p>
      </div>

      <div className={style.socialMedia}>
        <img src={image__google} alt="" />
      </div>
    </form>
  );
};
export default Card;
