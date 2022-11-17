import { useAuth0 } from "@auth0/auth0-react";

import facebookIcon from "../assets/images/facebook.svg";
import googleIcon from "../assets/images/google.svg";
import mailIcon from "../assets/images/mail.svg";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const googleLoginHandler = () => {
    loginWithRedirect({
      connection: "google-oauth2",
      redirectUri: "http://localhost:3000",
    });
  };

  const fbLoginHandler = () => {
    loginWithRedirect({
      connection: "facebook",
      redirectUri: "http://localhost:3000",
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
                  redirectUri: "http://localhost:3000",
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
