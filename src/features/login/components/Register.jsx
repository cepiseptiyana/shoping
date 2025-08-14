const Register = (props) => {
  const {
    style,
    username,
    password,
    email,
    handleChangeUsername,
    handleChangeEmail,
    handleChangePassword,
  } = props;

  return (
    <>
      <div className={style.input}>
        <input
          value={username}
          id="username"
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          onChange={(event) => handleChangeUsername(event.target.value)}
        />

        <input
          value={email}
          id="email"
          type="email"
          name="email"
          placeholder="email"
          autoComplete="off"
          onChange={(event) => handleChangeEmail(event.target.value)}
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

      <div className={style.loginButton}>
        <button type="submit">registrasi</button>
      </div>
    </>
  );
};

export default Register;
