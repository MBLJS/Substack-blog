import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/PostComments.css";
import {
  IoArrowRedoOutline,
  IoChatbubbleOutline,
  IoChevronDown,
  IoCloudUploadOutline,
  IoHeartOutline,
  IoNotificationsOutline,
  IoReorderThree,
  IoSearchOutline,
  IoSyncOutline,
} from "react-icons/io5";
import userLogo from "../Images/userlogo.webp";
import LikeImg from "../Images/LikeImg.webp";
import loginLogo from "../Images/loginLogo.jpg";
import { useUser } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";






function PostComments() {
  const { _id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [getComment, setGetComment] = useState([]);
  const [like, setLike] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);
  const [getLike, setGetLike] = useState([]);
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(true);
  const pRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userData } = useUser();
  const Navigate = useNavigate();


  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTextareaChange = (e) => {
    setComment(e.target.value);
    setIsTextareaEmpty(e.target.value.trim() === "");
  };

  const btn2Opacity = isTextareaEmpty ? 0.5 : 1;

  const getPost = () => {
    fetch(`http://localhost:5500/api/v3/post/${_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const limitPostContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  let createdAtDate = null;
  let month = "";
  let day = 0;

  if (post) {
    createdAtDate = new Date(post.created_at);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    month = monthNames[createdAtDate.getMonth()];
    day = createdAtDate.getDate();
  }

  const userDataForProfile = JSON.parse(sessionStorage.getItem("UserData"));

  const handleComment = async () => {
    const user_id = userDataForProfile._id;
    const post_id = _id;

    const comments = {
      user_id: user_id,
      post_id: post_id,
      comment: comment,
    };

    // Add comment text
    fetch(`http://localhost:5500/api/v4/${_id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comments),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Comment Posted");
        console.log(data);
      });
  }


  //Get Comment
  const getComments = () => {
    fetch(`http://localhost:5500/api/v4/${_id}/comments`)
      .then((resp) => resp.json())
      .then((data) => {
        setGetComment(data);
      });
  };

  useEffect(() => {
    getComments();
  }, []);



  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
  };



  function getUserFullName(userId) {
    if (!userId || !userData) {
      return "Unknown User";
    }

    const user = userData.find((user) => user._id === userId);
    return user ? user.name : "Unknown User";
  }


  const user_id = userDataForProfile._id;


  const handleLikeClick = (e) => {
    e.preventDefault();

    const isLiked = like.some(
      (likeItem) => likeItem.user_id === user_id && likeItem.post_id === _id
    );

    if (isLiked) {
      fetch("http://localhost:5500/api/v5/unlike", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user_id, post_id: _id }),
      })
        .then((res) => {
          console.log(res);
          alert("You unliked this content");

          setIsLiked(false);

          const updatedLikes = like.filter(
            (likeItem) => !(likeItem.user_id === user_id && likeItem.post_id === _id)
          );
          setLike(updatedLikes);

          localStorage.setItem("likes", JSON.stringify(updatedLikes));
        })
        .catch((err) => console.log(err.message));
    } else {
      const likeDetail = {
        user_id: user_id,
        post_id: _id,
        liked: true,
      };

      fetch("http://localhost:5500/api/v5/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(likeDetail),
      })
        .then((res) => {
          console.log(res);
          alert("You just liked this content");
          setIsLiked(true);

          const updatedLikes = [...like, likeDetail];
          setLike(updatedLikes);

          localStorage.setItem("likes", JSON.stringify(updatedLikes));

          getLikes();
        })
        .catch((err) => console.log(err.message));
    }
  };


  //save like when refresh
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likes")) || [];

    const isLiked = likedPosts.some(
      (likeItem) => likeItem.user_id === user_id && likeItem.post_id === _id
    );

    setIsLiked(isLiked);
    setLike(likedPosts);
  }, []);



//Get Like
let post_id = _id;
const getLikes = () => {
  fetch(`http://localhost:5500/api/v5/post/${post_id}/likes`)
    .then((resp) => resp.json())
    .then((data) => {
      setGetLike(data);
    });
};


  //LogOut 
  const handleLogOut = () => {
    localStorage.removeItem("userDataForProfile");

    Navigate("/");
  }



  return (
    <div>
      <div className="main typography use-theme-bg">
        <div className="main_menu_animated">
          <div className="main_content_divv">
            <div className="post_topbar_content">
              <div className="post_topbar_content_logo"></div>
              <h1 className="post_navtitle">
                <Link>Letters from a User</Link>
              </h1>
              <div className="post_navbar_btns">
                <button className="post_navbar_btn1">
                  Upgrade to paid
                </button>
                <button className="post_navbar_btn2">
                  <IoSearchOutline />
                </button>
                <button className="post_navbar_btn2">
                  <IoCloudUploadOutline />
                </button>
                <button className="post_navbar_btn2">
                  <IoNotificationsOutline />
                </button>
                <button className="post_navbar_btn3" onClick={handleToggleDropdown}>
                  <IoReorderThree className="threeburger" />
                  <img src={loginLogo} alt="" />
                </button>
              </div>
            </div>
            <div className="topbar_spacer"></div>

            <div className="comments_page">

              <div className="comment_container">
                <table className="comment_container_tb1">
                  <tr>
                    <td>
                      <table>
                        <tr></tr>
                        <tr>
                          <td>
                            <table>
                              <tr>
                                <td>
                                  <div className="comment_postheader">
                                    <h1 className="comment_date">
                                      <Link>{`${month} ${day}`}, 2023</Link>
                                    </h1>
                                    <div className="post_ufi">
                                      <div className="ufi_nameAndTime">
                                        <div className="ufi_name">
                                          <div>
                                            <Link>{userDataForProfile.name}</Link>
                                          </div>
                                        </div>
                                        <div className="ufi_date">
                                          <time>
                                            {`${month} ${day}`}
                                          </time>
                                        </div>
                                      </div>
                                      <div className="comment_like_btn">
                                        <Link onClick={handleLikeClick}>
                                          <IoHeartOutline className={`Imgee ${likeIcon ? 'imgliked' : ''}`} />
                                          <div>{isLiked ? "Unlike" : "Like"}</div>
                                          <div>{getLike.length}</div>
                                        </Link>
                                      </div>
                                      <div className="comment_like_btn">
                                        <Link>
                                          <IoChatbubbleOutline className="heart11" />
                                          <div>
                                            {getComment.length}
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="comment_like_btn">
                                        <Link>
                                          <IoSyncOutline className="heart11" />
                                          <div>
                                            2,532
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="comment_post_read">
                                    <p>
                                      {post && <p className="p2">{limitPostContent(post.text, 300)}</p>}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <Link className="commentReadPost" to="/SingleUserPost">
                                  Read  →
                                </Link>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr></tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div className="commentSection2">
                  <div className="commentAndShare">
                    <div className="comment_headingqq">608 Comments</div>
                    <button disabled={isTextareaEmpty} style={{ opacity: btn2Opacity }} onClick={handleComment}>
                      <IoArrowRedoOutline />
                      Share
                    </button>
                  </div>

                  <div className="commentInputForMe">
                    <form>
                      <img src={userLogo} alt="" />

                      <div className="commentTextArea">
                        <textarea
                          ref={pRef}
                          onInput={handleTextareaChange}
                          placeholder="Write a comment ..."
                        ></textarea>
                      </div>
                    </form>
                  </div>

                  <div className="comments_page_sort_controls">
                    <div className="comments_page_sort_menu">
                      <button>
                        <span>
                          Top First
                        </span>
                        <IoChevronDown className="eee333" />
                      </button>
                    </div>
                  </div>

                  <div className="comment_list_container">
                    <div className="comment_list">

                      {getComment.map((commentData, index) => (
                        <table key={index} className="comment_content">
                          <tr>
                            <td className="comment_head">
                              <div className="comment_head_1111">
                                <div className="comment_head_userhead">
                                  <Link>
                                    <div>
                                      <img src={userLogo} alt="" />
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>

                            <td className="comment_rest">
                              <div className="comment_meta">
                                <span className="commenterName">
                                  {userData && getUserFullName(post.user_id)}
                                </span>
                                <Link>{formatDate(commentData.created_at)}</Link>
                              </div>
                              <div className="comment_bodyy">
                                <p>
                                  <span>
                                    {commentData.comment} {/* Display the comment from your comment data */}
                                  </span>
                                </p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-wrap publication-footer">
              <div className="visibility-check"></div>
              <div className="themed_background">
                <div className="container">
                  <div class="footer_blurbs">
                    <div class="footer_copyright_blurb">© 2023 Heather Cox Richardson</div>
                    <div class="footer_terms_blurb">
                      <a>Privacy</a>
                      <span> ∙ </span>
                      <a >Terms</a>
                      <span> ∙ </span>
                      <a>Collection notice</a>
                    </div>
                  </div>
                  <div class="footer_buttons">
                    <a>
                      <svg role="img" width="1000" height="1000" viewBox="0 0 1000 1000" fill="#FF6719" stroke-width="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg"><g><title></title><path d="M764.166 348.371H236.319V419.402H764.166V348.371Z"></path><path d="M236.319 483.752V813.999L500.231 666.512L764.19 813.999V483.752H236.319Z"></path><path d="M764.166 213H236.319V284.019H764.166V213Z"></path></g>
                      </svg>
                      Start Writing
                    </a>
                    <a native="true" href="https://substack.com/app/app-store-redirect?utm_campaign=app-marketing&amp;utm_content=web-footer-button" class="footer-substack-cta get-the-app no-icon">
                      Get the app
                    </a>
                  </div>
                  <div className="footerLastitem">
                    <a>Substack</a>
                    is the home for great writing
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
                            <img src={loginLogo} alt="" />
                            <div className="labels">
                              <h1>User</h1>
                              <h2>user001@gamil.com</h2>
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
        </div>
      </div>



    </div>
  );
}

export default PostComments;