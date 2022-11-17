import { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import facebookIcon from "../assets/images/facebook.svg";
import googleIcon from "../assets/images/google.svg";
import mailIcon from "../assets/images/mail.svg";
import tickIcon from "../assets/images/checkmark.svg";
import crossIcon from "../assets/images/close.svg";

const Profile = () => {
  const { user } = useAuth0();
  const [loginIcon, setLoginIcon] = useState(null);
  console.log(user);

  useEffect(() => {
    if (user?.sub.includes("google-ouath2")) {
      setLoginIcon(googleIcon);
    } else if (user?.sub.includes("facebook")) {
      setLoginIcon(facebookIcon);
    } else {
      setLoginIcon(mailIcon);
    }
  }, []);

  return (
    <section className="container profile-container">
      <div className="profile-data-container">
        <div className="profile-img">
          <img src={user?.picture} alt="user profile" />
        </div>
        <div className="profile-data">
          <div className="username-container">
            <p className="username">
              {user?.sub.includes("google-ouath2") ||
              user?.sub.includes("facebook")
                ? user?.given_name
                : user?.nickname}
            </p>
          </div>
          <div className="user-data">
            <p>
              <span>Name: {user?.name}</span>
            </p>
            <p>
              <span>Email: {user?.email ? user.email : 'Not present'}</span>
            </p>
            <p className="login-method">
              <span>Login Method: </span>
              <img src={loginIcon} alt="login icon" />
            </p>
            <p className="login-method">
              <span>Email Verified: </span>
              {user?.email_verified ? (
                <img src={tickIcon} alt="tick icon" />
              ) : (
                <img src={crossIcon} alt="cross icon" />
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
