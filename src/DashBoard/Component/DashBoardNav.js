import { Link } from 'react-router-dom';
import './css/DashBoardNav.css';
import userImg from "../Nav_Images/loginLogo.jpg"
import { IoAddSharp, IoHomeOutline, IoPeopleCircleOutline, IoPersonAddSharp } from 'react-icons/io5';
function DashBoardNav() {

  return (
    <div>
      <nav className='Sidebar_nav'>
        <div className="sidebar_blog1">
          <div className="siderbar_user_info">
            <div class="user_profle_side">
              <div class="user_img">
                <img class="img-responsive" src={userImg} alt="#" />
              </div>
              <div class="user_info">
                <h6>Suleiman</h6>
                <p>
                  <span class="online_animation"></span>
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar_blog_2">
          <h4>General</h4>
          <ul class="list-unstyled components">
            <li>
              <Link>
              <IoHomeOutline className='dashHomeIcon'/>
              <span>DashBoard</span>
              </Link>
            </li>

            <li>
              <Link>
              <IoPeopleCircleOutline className='dashHomeIcon'/>
              <span>Users</span>
              </Link>
            </li>


            <li>
              <Link>
              <IoPersonAddSharp className='dashHomeIcon'/>
              <span>Create User</span>
              </Link>
            </li>


            <li>
              <Link>
              <IoAddSharp className='dashHomeIcon'/>
              <span>Create Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DashBoardNav;
