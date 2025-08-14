const Login = (props) => {
  const {
    style,
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
  } = props;

  return (
    <>
      <div className={style.input}>
        <input
          value={username}
          id="text"
          type="username"
          name="username"
          placeholder="username"
          autoComplete="off"
          onChange={(event) => handleChangeUsername(event.target.value)}
        />

        <input
          value={password}
          id="password"
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          onChange={(event) => handleChangePassword(event.target.value)}
        />
      </div>

      <div className={style.remember}>
        <label htmlFor="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            name="checkbox"
            autoComplete="off"
          />
          remember me
        </label>
      </div>

      <div className={style.loginButton}>
        <button type="submit">login</button>
      </div>
    </>
  );
};

export default Login;
