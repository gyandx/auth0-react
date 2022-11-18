import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import facebookIcon from "../assets/images/facebook.svg";
import googleIcon from "../assets/images/google.svg";
import mailIcon from "../assets/images/mail.svg";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [currentUrl, setCurrentUrl] = useState(null);
  const currentPath = window.location.href;

  useEffect(() => {
    currentPath.includes('localhost') ?
    setCurrentUrl("http://localhost:3000/auth0-react/") : setCurrentUrl("https://gyandx.github.io/auth0-react/");
  }, [])
  

  const googleLoginHandler = () => {
    loginWithRedirect({
      connection: "google-oauth2",
      redirectUri: currentUrl,
    });
  };

  const fbLoginHandler = () => {
    loginWithRedirect({
      connection: "facebook",
      redirectUri: currentUrl,
    });
  };

  return (
    <>
      <section className="container hero-container">
        {!isAuthenticated ? (
          <div className="social-icon-container">
            <div
              className="icon-img-container google"
              onClick={googleLoginHandler}
            >
              <img
                className="social-icons"
                src={googleIcon}
                alt="google icon"
              />
              <span>Log in with google</span>
            </div>

            <div className="icon-img-container fb" onClick={fbLoginHandler}>
              <img
                className="social-icons"
                src={facebookIcon}
                alt="facebook icon"
              />
              <span>Log in with facebook</span>
            </div>

            <div
              className="icon-img-container mail"
              onClick={() =>
                loginWithRedirect({
                  redirectUri: {currentUrl},
                })
              }
            >
              <img className="social-icons" src={mailIcon} alt="mail icon" />
              <span>Log in with email</span>
            </div>
          </div>
        ) : (
          <>
            <p className="user">Hi, <span>{user.name}</span></p>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
