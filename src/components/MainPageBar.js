import { Link } from "react-router-dom";
import "./css/MainPageBar.css";
import { IoNotificationsOutline, IoReorderThree } from "react-icons/io5";
import loginLogo from "../Images/loginLogo.jpg"
import UserPostModal from "./UserPostModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





function MainPageBar() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const Navigate = useNavigate();


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }


  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const userDataForProfile = JSON.parse(sessionStorage.getItem("UserData"));


   //LogOut 
   const handleLogOut = () => {
    localStorage.removeItem("userDataForProfile");

    Navigate("/");
  }

  return (
    <div>
      <div className="reader_nav_root">

        <div className="reader_nav_top_left">
          <div className="reader_nav_top_left_itemdiv">
            <Link to="/">
              <svg role="img" width="16" height="18" viewBox="0 0 16 18" fill="#ff6719" stroke-width="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg" class="frontend-reader2-Nav-module__logo--wRSQX"><g><title></title><path d="M16 4H0V6H16V4Z"></path><path d="M0 8V18L7.9993 13.534L16 18V8H0Z"></path><path d="M16 0H0V2H16V0Z"></path></g></svg>
            </Link>
          </div>
        </div>

        <div className="reader_nav_top_right">
          <div className="reader_nav_top_right_itemdiv">
            <div className="reader_nav_top_inset">
              <div className="reader_nav_top_inset_item1">
                <div>
                  Inbox
                </div>
              </div>
              <div className="reader_nav_top_inset_item2">
                <form className="reader_nav_search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="reader2-search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
                  <input type="search" placeholder="search..." />
                </form>
                <button>Dashboard</button>
                <button>
                  <IoNotificationsOutline />
                </button>
                <button onClick={handleToggleDropdown}>
                  <IoReorderThree className="loginLogo_ham" />
                  <img src={userDataForProfile.img} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="reader_nav_column">
          <div className="reader_nav_column_main">
            <div className="reader_nav_column_main_outerdiv">
              <div className="reader_nav_column_main_outerdiv_icons">
                <div className="inbox_link_icon">
                  <Link to="/inbox">
                    <div>
                      <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="frontend-reader2-Nav-module__navIcon--mjRXu frontend-reader2-Nav-module__filled--V2xWX"><g><title></title><path d="M8 12L2 12L2 18.3333C2 19.2538 2.74619 20 3.66667 20L20.3333 20C21.2538 20 22 19.2538 22 18.3333V12L16 12L14 15L10 15L8 12Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L16 12L14 15L10 15L8 12L2 12" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M5.45 5.11L2.10583 11.7886C2.03624 11.9276 2 12.0809 2 12.2364L2 18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20L20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12.2364C22 12.0809 21.9638 11.9276 21.8942 11.7886L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4L7.24 4C6.86792 4.0002 6.50326 4.10419 6.18705 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></g></svg>
                    </div>
                  </Link>
                </div>

                <div className="inbox_link_icon">
                  <Link to="#">
                    <div>
                      <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="frontend-reader2-Nav-module__navIcon--mjRXu"><g><title></title><path d="M9.82746 10.2663H17.2941M10.2039 14.533H14.4706M6 19.1L2.42832 18.1872C1.53922 17.949 1.0116 17.0351 1.24983 16.146L4.52816 3.91113C4.76639 3.02202 5.68029 2.49438 6.5694 2.73262L19 6M6.00001 7.66666V20.3331C6.00001 21.2536 6.74619 21.9998 7.66665 21.9998L20.3333 22C21.2538 22 22 21.2538 22 20.3333V7.66666C22 6.74619 21.2538 5.99999 20.3333 5.99999H7.66667C6.7462 5.99999 6.00001 6.74619 6.00001 7.66666Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>                    </div>
                  </Link>
                </div>

                <div className="inbox_link_icon">
                  <Link to="#">
                    <div>
                      <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="frontend-reader2-Nav-module__navIcon--mjRXu"><g><title></title><path d="M3 3H17C18.1046 3 19 3.89543 19 5V9.75008H11C9.89543 9.75008 9 10.6455 9 11.7501V16.7501C9 16.8314 9.00486 16.9117 9.0143 16.9905L4.65547 19.8964C4.58901 19.9407 4.5 19.893 4.5 19.8131V15H3C1.89543 15 1 14.1046 1 13V5C1 3.89543 1.89543 3 3 3Z"></path><path d="M11 9.75L20.5 9.75C21.6046 9.75 22.5 10.6454 22.5 11.75V16.75C22.5 17.8546 21.6046 18.75 20.5 18.75H20V22.3108C20 22.3911 19.91 22.4387 19.8437 22.3934L14.5 18.75L11 18.75C9.89543 18.75 9 17.8546 9 16.75L9 11.75C9 10.6454 9.89543 9.75 11 9.75Z"></path></g></svg>                    </div>
                  </Link>
                </div>

                <div className="inbox_link_icon">
                  <Link to="#">
                    <div>
                      <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="frontend-reader2-Nav-module__navIcon--mjRXu"><g><title></title><path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>                    </div>
                  </Link>
                </div>

                <div className="inbox_link_icon">
                  <Link to="#">
                    <div>
                      <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="frontend-reader2-Nav-module__navIcon--mjRXu"><g><title></title><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.2398 7.75977L14.1198 14.1198L7.75977 16.2398L9.87977 9.87977L16.2398 7.75977Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>                    </div>
                  </Link>
                </div>

                <div className="inbox_link_icon">
                  <Link to="/userProfile">
                    <div>
                      <img src={loginLogo} alt="" />
                    </div>
                  </Link>
                </div>

                <div className="e__">
                  <button type="button" onClick={handleOpenModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
                  </button>
                </div>
              </div>


              <div className="reader_more">
                <div className="">
                  <a>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="more-icon"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </div>
                    <span className="reader-nav-item-children">
                      <div className="">More</div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="mainpageDropDown" >
            <div>
              <ul>
                <div className="mainpageDropDown_wrapper">
                  <li>
                    <div className="mainpageDropDown_scroll_container">
                      <Link className="mainpageDropDown_scroll_container_topLink" to="/userProfile">
                        <img src={userDataForProfile.img} alt="" />
                        <div className="labels">
                          <h1>{userDataForProfile.name}</h1>
                          <h2>{userDataForProfile.email}</h2>
                        </div>
                      </Link>

                      <hr />
                      <Link className="Linkkkk">
                        <svg role="img" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" class="indicator-item-icon" ><g><title></title><path d="M22 12L16 12L14 15L10 15L8 12L2 12" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.45 5.11L2.10583 11.7886C2.03624 11.9276 2 12.0809 2 12.2364L2 18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20L20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12.2364C22 12.0809 21.9638 11.9276 21.8942 11.7886L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4L7.24 4C6.86792 4.0002 6.50326 4.10419 6.18705 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        Inbox
                      </Link>
                      <Link className="Linkkkk">
                        <svg role="img" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" class="indicator-item-icon" ><g><title></title><path d="M9.82746 10.2663H17.2941M10.2039 14.533H14.4706M6 19.1L2.42832 18.1872C1.53922 17.949 1.0116 17.0351 1.24983 16.146L4.52816 3.91113C4.76639 3.02202 5.68029 2.49438 6.5694 2.73262L19 6M6.00001 7.66666V20.3331C6.00001 21.2536 6.74619 21.9998 7.66665 21.9998L20.3333 22C21.2538 22 22 21.2538 22 20.3333V7.66666C22 6.74619 21.2538 5.99999 20.3333 5.99999H7.66667C6.7462 5.99999 6.00001 6.74619 6.00001 7.66666Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        Note
                      </Link>
                      <Link className="Linkkkk">
                        <svg role="img" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" class="indicator-item-icon" ><g><title></title><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.2398 7.75977L14.1198 14.1198L7.75977 16.2398L9.87977 9.87977L16.2398 7.75977Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        Explore
                      </Link>
                      <Link className="Linkkkk">
                        <svg role="img" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" class="indicator-item-icon" ><g><title></title><path d="M3 3H17C18.1046 3 19 3.89543 19 5V9.75008H11C9.89543 9.75008 9 10.6455 9 11.7501V16.7501C9 16.8314 9.00486 16.9117 9.0143 16.9905L4.65547 19.8964C4.58901 19.9407 4.5 19.893 4.5 19.8131V15H3C1.89543 15 1 14.1046 1 13V5C1 3.89543 1.89543 3 3 3Z"></path><path d="M11 9.75L20.5 9.75C21.6046 9.75 22.5 10.6454 22.5 11.75V16.75C22.5 17.8546 21.6046 18.75 20.5 18.75H20V22.3108C20 22.3911 19.91 22.4387 19.8437 22.3934L14.5 18.75L11 18.75C9.89543 18.75 9 17.8546 9 16.75L9 11.75C9 10.6454 9.89543 9.75 11 9.75Z"></path></g></svg>
                        Chat
                      </Link>
                      <Link className="Linkkkk">
                        <svg role="img" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" class="indicator-item-icon" ><g><title></title><path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        Activity
                      </Link>
                      <Link className="Linkkkk">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="start-writing-icon indicator-item-icon"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
                        Writer dashboard
                      </Link>
                      <hr />
                      <Link className="mainpageDropDown_sssLink">
                        Settings
                      </Link>
                      <Link className="mainpageDropDown_sssLink">
                        Support
                      </Link>
                      <Link className="mainpageDropDown_sssLink" onClick={handleLogOut}>
                        Sign out
                      </Link>
                      <hr />
                      <Link className="mainpageDropDown_getapp">Get the app
                        <svg role="img" width="21" height="24" viewBox="0 0 21 24" fill="#FF6719" stroke-width="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg" class="item-badge branded"><g><title></title><path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path><path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path><path d="M20.9991 0H0V2.83603H20.9991V0Z"></path></g></svg>
                      </Link>
                      <hr />
                      <div class="maindropdown_terms_footer">
                        <a href="#">About</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Collection notice</a>
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        )}


      </div>
      <UserPostModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default MainPageBar;