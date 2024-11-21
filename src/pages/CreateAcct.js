import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInNavbar from "../components/SignInNavbar";
import "./css/CreateAcct.css";
import QRscan from "../Images/QRscan.png";
import appstore from "../Images/app-store.png";
import googleplay from "../Images/google-play.jpg";
import img_app from "../Images/img_app.png";

function CreateAcct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [profPicUrl, setProfPicUrl] = useState(""); // Store the profile picture URL
  const [err, setErr] = useState(false);

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !UserName || !password || !bio || !profPicUrl) {
      setErr(true);
      return;
    }

    try {
      // Create a JSON object with the user data, including the profile picture URL
      const userData = {
        name,
        email,
        user_name: UserName,
        bio,
        password,
        img: profPicUrl,
      };

      const response = await fetch("http://localhost:5500/api/v1/createAcct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Send the user data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        alert("User Created");
        console.log(data);
      } else {
        console.error("Failed to create user:", response.status);
      }
    } catch (error) {
      console.error("Error while creating user:", error);
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setProfPics(file);
  // };

  return (
    <div>
      <div className="">
        <SignInNavbar />
        <div className="SignInPage_top">
          <div className="SignInPage_top_logoSign">
            <Link to="/">
              <svg
                role="img"
                viewBox="0 0 16 18"
                fill="#ff6719"
                strokeWidth="1.8"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title></title>
                  <path d="M16 4H0V6H16V4Z"></path>
                  <path d="M0 8V18L7.9993 13.534L16 18V8H0Z"></path>
                  <path d="M16 0H0V2H16V0Z"></path>
                </g>
              </svg>
            </Link>
            <h2>Sign up to Substack</h2>
          </div>
          <div className="SignInPage_top_form2">
            <form onSubmit={handleSubmitUser}>
              <div className="forinput">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name (Required)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label>UserName</label>
                  <input
                    type="text"
                    placeholder="Handle"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label>Bio</label>
                  <input
                    type="text"
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
                <div>
                  <label>Profile Picture URL</label>
                  <input
                    type="text"
                    placeholder="Profile Picture URL"
                    value={profPicUrl}
                    onChange={(e) => setProfPicUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {err && <p className="error_message">All fields are required.</p>}
              <div className="forbtn">
                <button type="submit">Continue</button>
              </div>
            </form>
          </div>
          <div className="createAcctLink">
            <div className="createAcctLink_link">
              Already have an Account? <Link to="/SignInPage">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="SignInPage_bottom">
        <div className="SignInPage_bottom_outerdiv">
          <div className="SignInPage_bottom_outerdiv_left">
            <div className="SignInPage_bottom_outerdiv_leftTxt">
              <h3>Stay signed in</h3>
              <div>Download the Substack app for Android or iOS</div>
              <div className="SignInPage_bottom_outerdiv_leftTxtscan">
                <div className="SignInPage_bottom_outerdiv_leftTxtscanA">
                  <div className="SignInPage_bottom_outerdiv_leftTxtscanB">
                    <div>
                      <img src={QRscan} alt="" />
                    </div>
                  </div>
                </div>
                <div className="SignInPage_bottom_outerdiv_leftApp">
                  <Link>
                    <img src={appstore} alt="" />
                  </Link>
                  <Link>
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

export default CreateAcct;
