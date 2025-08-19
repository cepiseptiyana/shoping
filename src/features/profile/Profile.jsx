import style from "./style/profile.module.css";

import feather from "feather-icons";

//
import { useUser } from "../../components/hooks/useUser";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user, loading, error } = useUser();
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const [emails, setEmails] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (user) {
      setImage(user.picture);
      setUsername(user.displayName);
      setEmails(user.emails[0].value);
      setFullName(user.nickname);
    }
  }, [user, image, username, emails, fullName]);

  if (user === null)
    return (
      <p style={{ paddingTop: "88px", paddingLeft: "20px" }}>login please</p>
    );

  return (
    <section className={style.container}>
      <div className={style.wraper}>
        <figure className={style.image}>
          <img src={image} alt="" />
          <figcaption>{username}</figcaption>
        </figure>

        <div className={style.account}>
          <p>Account</p>
          <p>Username: {username} </p>
          <p>Emails: {emails}</p>
          <p>Full Name {fullName}</p>
        </div>

        <div className={style.logout}>
          <label>
            <span
              dangerouslySetInnerHTML={{
                __html: feather.icons["log-out"].toSvg(),
              }}
            />
            <a href="https://login-auth0-iota.vercel.app/logout">Logout</a>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Profile;
