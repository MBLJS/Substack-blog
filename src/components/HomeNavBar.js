import "./css/HomeNavBar.css";
import { useState } from "react";
import { IoChevronDown, IoSearchOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



function HomeNavBar() {
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [writersDropdownOpen, setWritersDropdownOpen] = useState(false);
  const [readersDropdownOpen, setReadersDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen((prev) => !prev);
    setWritersDropdownOpen(false);
    setReadersDropdownOpen(false);
  };

  const toggleWritersDropdown = () => {
    setWritersDropdownOpen((prev) => !prev);
    setResourcesDropdownOpen(false);
    setReadersDropdownOpen(false);
  };

  const toggleReadersDropdown = () => {
    setReadersDropdownOpen((prev) => !prev);
    setResourcesDropdownOpen(false);
    setWritersDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav_transperent">
          <div className="nav_transperent2">
            <div className="home_navigation">
              <div className="home_left_flex">
                <IoMenuOutline className="hamburger-icon" onClick={toggleSidebar} />
                <div className={`sidebar${sidebarOpen ? " open" : ""}`}>
                  <button onClick={toggleSidebar}>Close</button>
                  {/* Corrected the ul elements */}
                  <ul className="sidebar_content">
                    <div className="sidebar_content1">
                      <li><a href="#">How to start Substack</a></li>
                      <li><a href="#">Going paid guide</a></li>
                      {/* Other list items */}
                    </div>
                  </ul>
                  <ul className="sidebar_content">
                    <div className="sidebar_content2">
                      <li><a href="#">Switch to Substack</a></li>
                      <li><a href="#">GO paid</a></li>
                      {/* Other list items */}
                    </div>
                  </ul>
                  <ul className="sidebar_content">
                    <div className="sidebar_content3">
                      <li><a href="#">Substack App</a></li>
                      <li><a href="#">Discover</a></li>
                      {/* Other list items */}
                    </div>
                  </ul>
                </div>
                <div className="home_left_flex home_left_flex2">
                  <a href="/" native="true" className="homepage-nav-logo">
                    <svg role="img" width="21" height="24" viewBox="0 0 21 24" fill="#FF6719" strokeWidth="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo-icon"><g><title></title><path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path><path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path><path d="M20.9991 0H0V2.83603H20.9991V0Z"></path></g></svg>
                  </a>
                  <button onClick={toggleResourcesDropdown}>
                    <span>Resources</span>
                    <IoChevronDown className="downicon" />
                    {resourcesDropdownOpen && (
                      <ul>
                        <div className="dropdown-menu1">
                          <li><a href="#">How to start Substack</a></li>
                          <li><a href="#">Going paid guide</a></li>
                          <li><a href="#">Resource center</a></li>
                          <li><a href="#">Community & programs</a></li>
                          <li><a href="#">Help center</a></li>
                          <li><a href="#">Brand asset</a></li>
                        </div>
                      </ul>
                    )}
                  </button>
                  <button onClick={toggleWritersDropdown}>
                    <span>Writers</span>
                    <IoChevronDown className="downicon" />
                    {writersDropdownOpen && (
                      <ul>
                        <div className="dropdown-menu2">
                          <li><a href="#">Switch to Substack</a></li>
                          <li><a href="#">GO paid</a></li>
                          <li><a href="#">Grow your audience</a></li>
                          <li><a href="#">For podcasts</a></li>
                          <li><a href="#">For bloggers</a></li>
                          <li><a href="#">For finance writers</a></li>
                          <li><a href="#">For authors</a></li>
                          <li><a href="#">For comic creators</a></li>
                          <li><a href="#">For food writers</a></li>
                          <li><a href="#">For Local news</a></li>
                        </div>
                      </ul>
                    )}
                  </button>
                  <button onClick={toggleReadersDropdown}>
                    <span>Readers</span>
                    <IoChevronDown className="downicon" />
                    {readersDropdownOpen && (
                      <ul>
                        <div className="dropdown-menu2">
                          <li><a href="#">Substack App</a></li>
                          <li><a href="#">Discover</a></li>
                          <li><a href="#">Featured</a></li>
                        </div>
                      </ul>
                    )}
                  </button>
                </div>
              </div>
              <div className="home_right_flex">
                <form className="search-form">
                  <div className="search-input">
                    <IoSearchOutline className="search-icon" />
                    <input type="text" placeholder="Search Substack..." />
                  </div>
                </form>
                <a href="#" className="home_right_flex_a">Start writing</a>
                <Link to="/signInPage" className="home_right_flex_button">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavBar;
