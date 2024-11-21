import React, { useRef } from "react";
import "./css/HomeFooter.css";
import footerImg1 from "../Images/app-store-white.jpg"
import footerImg2 from "../Images/google-play-white.jpg"


function HomeFooter() {

  return (
    <div>
      <div className="Footer_wrap">
        <div className="home_footer">
          <div className="footer_contain">
            <div className="footer_info">
              <div className="footer_info_col">
                <h3>Read</h3>
                <a href="#">Discover</a>
                <a href="#">Get the app</a>
                <a href="#">Featured</a>
                <a href="#">Substack Reader</a>
                <a href="#">Top in culture</a>
                <a href="#">Top podcasts</a>
                <a href="#">Top in food &amp; drink</a>
                <a href="#">Top in finance</a>
                <a href="#">Top in sports</a>
                <a href="#">Top in politics</a>
                <a href="#">Top in technology</a>
                <a href="#">Top in faith</a>
                <a href="#">Top in business</a>
                <a href="#">Sitemap</a>
              </div>
              <div className="footer_info_col">
                <h3>Writers</h3>
                <a href="#">Switch to Substack</a>
                <a href="#">Switch from Ghost</a>
                <a href="#">Get started</a>
                <a href="#">Go paid</a>
                <a href="#">For podcasts</a>
                <a href="#">For bloggers</a>
                <a href="#">For finance writers</a>
                <a href="#">For authors</a>
                <a href="#">For comic creators</a>
                <a href="#">For food writers</a>
                <a href="#">For local news</a>
              </div>
              <div className="footer_info_col">
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="#">Jobs</a>
                <a href="#">Blog</a>
                <a href="#">Vulnerability Policy</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer_info_col">
                <h3>Resources</h3>
                <a href="#">Resource center</a>
                <a href="#">Guide to going paid</a>
                <a href="#">Help center</a>
                <a href="#">Community and programs</a>
                <a href="#">Brand assets</a>
              </div>
            </div>
            <div class="logo-copy-wrapper">
              <svg role="img" width="21" height="24" viewBox="0 0 21 24" fill="#FF6719" stroke-width="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg" className="navbar-logo-wordmark"><g><title></title><path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path><path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path><path d="M20.9991 0H0V2.83603H20.9991V0Z"></path></g></svg>
              <div className="slogan tw-mt-5">Substack is the home for great writing</div>
            </div>
          </div>
         </div>


         <div className="footer_divider"></div>
          <div className="footer_bottom_bar">
            <div className="app_badges">
              <a href="#" className="app-badge">
                <img src={footerImg1} />
              </a>
              <a href="#" className="app-badge">
                <img src={footerImg2}/>
              </a>
            </div>
            <div class="footer_bottom_links">
              <span className="copyright bottom_item">© Substack Inc.</span>
              <a href="#" className="bottom_item">Privacy</a>
              <a href="#" className="bottom_item">Terms</a>
              <a href="#" className="bottom_item">Collection notice</a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HomeFooter;