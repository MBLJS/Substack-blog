import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInNavbar from "../components/SignInNavbar";
import "./css/SignInPage.css";
import QRscan from "../Images/QRscan.png";
import appstore from "../Images/app-store.png";
import googleplay from "../Images/google-play.jpg";
import img_app from "../Images/img_app.png";
import axios from "axios";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userData, setUserData] = useState(null); 
  const navigate = useNavigate(); 

  const LoginURL = "https://mysubstack-server.onrender.com/api/v2/login";

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErr(true);
      return;
    }

    const auth = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(LoginURL, auth);

      if (response.status === 200) {
        const userData = response.data.user;
        setUserData(userData); 

        console.log("User_Data:", userData);
        sessionStorage.setItem("UserData", JSON.stringify(userData));

        navigate('/inbox');
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("An error occurred during login");
    }
  };

  return (
    <div>
      <div className="">
        <SignInNavbar />
        <div className="SignInPage_top">
          <div className="SignInPage_top_logoSign">
            <Link to="/">
            </Link>
            <h2>Sign in to Substack</h2>
          </div>
          <div className="SignInPage_top_form">
            <form onSubmit={handleSubmitUser}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {err && <p className="error_message">All fields are required.</p>}
              {loginError && <p className="error_message">{loginError}</p>}
              <button>Continue</button>
            </form>
          </div>
          <div className="createAcctLink">
            <div className="createAcctLink_link">
              First time here?{" "}
              <Link to="/CreateAcct">Create an account</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="SignInPage_bottom">
        <div className="SignInPage_bottom_outerdiv">
          <div className="SignInPage_bottom_outerdiv_left">
            <div className="SignInPage_bottom_outerdiv_leftTxt">
              <h3>Stay signed in</h3>
              <div>
                Download the Substack app for Android or iOS
              </div>
              <div className="SignInPage_bottom_outerdiv_leftTxtscan">
                <div className="SignInPage_bottom_outerdiv_leftTxtscanA">
                  <div className="SignInPage_bottom_outerdiv_leftTxtscanB">
                    <div>
                      <img src={QRscan} alt="" />
                    </div>
                  </div>
                </div>
                <div className="SignInPage_bottom_outerdiv_leftApp">
                  <Link to="#">
                    <img src={appstore} alt="" />
                  </Link>
                  <Link to="#">
                    <img src={googleplay} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="SignInPage_bottom_outerdiv_right">
            <img src={img_app} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
