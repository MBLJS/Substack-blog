import React, { useState, useEffect } from "react";
import "./css/UserProfile.css";
import { IoArrowForward, IoChevronBack, IoChevronDown, IoChevronForwardOutline } from "react-icons/io5";
import MainPageBar from "../components/MainPageBar";
import byUseImg from "../Images/byUserImg.webp";
import { Link } from "react-router-dom";

function UserProfile() {
  const [posts, setPosts] = useState([]);
  const userDataForProfile = JSON.parse(sessionStorage.getItem("UserData"));

  console.log(userDataForProfile._id)


  useEffect(() => {
    fetch(`https://mysubstack-server.onrender.com/api/v3/posts?user_id=${userDataForProfile._id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      });
  }, [userDataForProfile._id]);
  
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
        <div className="userOuterDiv">
          <div className="userinnerDiv">
            <div className="userinnerDiv_forPadding">
              <div className="userinnerDiv_forPadding_main_top">
                <div className="userinnerDiv_forPadding_main_top1">
                  <div className="userinnerDiv_logoDiv">
                    <img src={userDataForProfile.img} alt="" />
                  </div>
                  <div className="userinnerDiv_inviteDiv">
                    <div className="userinnerDiv_inviteDiv_btns">
                      <button type="button" className="Btn1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-edit2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                      </button>
                      <button type="button" className="Btn2">Invite friends</button>
                    </div>
                  </div>
                </div>
                <div className="userinner_name">
                  <h1>{userDataForProfile.name}</h1>
                  <div className="username">
                    <Link>
                      @{userDataForProfile.user_name}
                    </Link>
                    <div className="username_dot">.</div>
                    <Link className="seeFollowers">See followers</Link>
                  </div>
                  <div className="userDescription">
                    <span>{userDataForProfile.bio}</span>
                  </div>
                </div>
              </div>
              <div className="userinnerDiv_forPadding_main_bottom">
                <div className="userinnerDiv_forPadding_main_bottom_navBtns">
                  <button className="userNavBtn1">
                    <div>
                      Posts
                    </div>
                  </button>

                  <button className="userNavBtn2">
                    <div>
                      Notes
                    </div>
                  </button>

                  <button className="userNavBtn3">
                    <div>
                      Reads (8)
                    </div>
                  </button>
                </div>
                <div className="userinnerDiv_forPadding_main_bottom_post">
                  <div className="userinnerDiv_forPadding_main_bottom_post_main">
                    {posts.map((post) => {
                      const createdAtDate = new Date(post.created_at);
                      const monthNames = [
                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                      ];
                      const month = monthNames[createdAtDate.getMonth()];
                      const day = createdAtDate.getDate();

                      return (
                        <div key={post.id} className="usermain_posts">
                          <Link>
                            <div className="usermain_posts_top_Flex">
                              <div className="usermain_posts_top_Flex_img">
                                <img src={userDataForProfile.img} alt="" />
                              </div>
                              <div className="pub-name">
                                <Link>{userDataForProfile.name}’s Substack</Link>
                              </div>
                              <div>
                                <div className="timestamp inbox-item-timestamp">{`${month} ${day}`}</div>
                              </div>
                            </div>
                            <div className="reader2-post-body">
                              <div>
                                <div className="reader2-post-title reader2-clamp-lines">{post.title}</div>
                                <div className="reader2-paragraph reader2-secondary reader2-clamp-lines reader2-3-lines">
                                  {limitPostContent(post.text, 100)}
                                </div>
                                <div className="reader2-item-meta">
                                  {userDataForProfile.name}
                                  <span className="meta-bullet">∙</span>
                                  1 min read
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
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
  );
}

export default UserProfile;
