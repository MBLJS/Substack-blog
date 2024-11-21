import { Link } from "react-router-dom";
import "./css/SignInNavbar.css";
import { IoChevronBackOutline } from "react-icons/io5";


function SignInNavbar() {

  return (
    <div>
      <div className="SignInNavbar">
        <div className="homepage_nav_wrap">
          <div className="left">
            <button>
              <Link to="/">
                <IoChevronBackOutline/>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInNavbar;