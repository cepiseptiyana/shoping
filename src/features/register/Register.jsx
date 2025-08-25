// componenst
import { useState } from "react";
import RegisterSuccess from "./alert/RegisterSuccess";
import Validation from "./alert/Validation";

// router
import { Link } from "react-router";

// Assets
import image from "@/assets/loginImage.jpg";
import gmail from "@/assets/gmail.svg";
import github from "@/assets/github.svg";

// style
import style from "./style/register.module.css";

// redux
import { useDispatch } from "react-redux";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState([]);
  const [validasi, setValidasi] = useState("");

  const dispatch = useDispatch();

  async function handleForm(e) {
    e.preventDefault();

    if (firstName.length >= 3 && lastName.length >= 3) {
      if (email.length > 3) {
        if (password.length > 5) {
          try {
            const res = await fetch(
              "https://shopping-api-omega.vercel.app/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: firstName + " " + lastName,
                  email,
                  password,
                }),
              }
            );
            const result = await res.json();
            // console.log(result);
            setValidasi("");
            setRegister([result]);
          } catch (err) {
            console.log(err);
          }
        } else {
          setValidasi("isi password minimal 5 karakter");
        }
      } else {
        setValidasi("isi email minimal 3 karakter");
      }
    } else {
      setValidasi("isi username minimal 4 karakter");
    }
  }

  return (
    <section className={style.container}>
      <div className={style.wraperLeft}>
        <div className={style.wraperImage}>
          <h1>shooping</h1>
          <h1>let's create orders</h1>
          <img src={image} alt="" />
        </div>
      </div>

      <div className={style.wraperRight}>
        <form action="" onSubmit={handleForm}>
          <div className={style.header}>
            Don't have an account ?{" "}
            <Link to="/login" className={style.register}>
              login
            </Link>
          </div>

          {register.length != 0 && <RegisterSuccess register={register} />}
          {validasi.length != 0 && <Validation validasi={validasi} />}

          <h1>sign in to Shooping</h1>
          <p>Enter your detail below.</p>

          <ul className={style.wraperInput}>
            <li className={style.username}>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </li>

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

          <button type="submit">register</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
