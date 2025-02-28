import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Mainpage.css";
import MainPageBar from "../components/MainPageBar";
import userImg from "../Images/userImg.webp";
import PostImg from "../Images/PostImg.webp";
// import { fetchUserData } from '../Services/Api'; // Replace with the actual path to your fetchUserData file



function Mainpage() {

  const Navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  



  useEffect(() => {
    fetch("https://mysubstack-server.onrender.com//api/v3/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const limitPostContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <div>
      <MainPageBar />
      <div className="reader_nav_page">
        <div className="reader_nav_page_main">
          <div className="reader_nav_page_main_divider"></div>
          <div className="reader_nav_page_scroll">
            <div className="reader_nav_page_scroll_11">
              <div className="reader_nav_page_scroll_22">
                <div className="reader_nav_center">
                  <div className="reader2_page">
                    <div className="reader2_page_body">
                      <div className="reader2_page_body_top">
                        <div className="reader2_page_body_top11">
                          <div className="reader2_page_body_topBtnOuterDiv">
                            <div className="reader2_page_body_topBtns">
                              <button>All</button>
                              <button>Saved</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="reader_content">
                        {posts.map((post) => {
                          const createdAtDate = new Date(post.created_at);
                          const monthNames = [
                            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                          ];
                          const month = monthNames[createdAtDate.getMonth()];
                          const day = createdAtDate.getDate();

                          return (
                            <Link to={`/SingleUserPost/${post._id}`} key={post.id}>
                              <div className="reader2_post_head">
                                <div className="reader2_post_head_img">
                                  <img src={userImg} alt="" />
                                </div>
                                <div className="pub_name">
                                  <Link to="#">
                                    Bald Faced Truth By John Canzano
                                  </Link>
                                </div>

                                <div className="reader2_date">
                                  <div className="inbox_item_timestamp">{`${month} ${day}`}</div>
                                  <div className="inbox_item_actions_menu">
                                    <div className="reader2-clickable inbox-item-action-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="reader2-post-action-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                                    </div>
                                    <div className="reader2-clickable inbox-item-action-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inbox-item-action-icon reader2-post-action-copy"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    </div>
                                    <div className="reader2-clickable inbox-item-action-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="reader2-post-action-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                                    </div>
                                    <div className="reader2-clickable inbox-item-action-button">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inbox-item-action-icon reader2-post-action-archive"><rect width="20" height="5" x="2" y="4" rx="2"></rect><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"></path><path d="M10 13h4"></path></svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="reader2_post_body">
                                <div className="reader2_post_body_header">
                                  <div className="reader2-post-title reader2-clamp-lines">
                                    {limitPostContent(post.text, 100)}
                                  </div>
                                  <div className="reader2-3-lines">
                                    {limitPostContent(post.text, 30)}
                                  </div>
                                  <div className="reader2-item-meta">
                                  {post.name}
                                    <span className="meta-bullet">∙</span>
                                    5 min read
                                  </div>
                                </div>
                                <div className="reader2-post-picture-container">
                                  <img src={post.user_postImg} alt="" />
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
