import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/SingleUserPost.css";
import {
  IoChatbubbleOutline,
  IoChevronDown,
  IoChevronUp,
  IoCloseOutline,
  IoCloudUploadOutline,
  IoEllipsisHorizontal,
  IoHeartOutline,
  IoSyncOutline,
} from "react-icons/io5";
import MainPageBar from "../components/MainPageBar";
import userimg from "../Images/userImg.webp";
import LikeImg from "../Images/LikeImg.webp";
import LikesView from "../components/LikesView";
import CommentOnPost from "../components/CommentOnPost";


function SingleUserPost() {
  const { _id } = useParams();
  const [getComment, setGetComment] = useState([]);
  const [like, setLike] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);
  const [getLike, setGetLike] = useState([]);
  const [post, setPost] = useState(null);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
  };

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
  };

  useEffect(() => {
    fetch(`https://mysubstack-server.onrender.com//api/v3/post/${_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
      });
  }, [_id]);

  let createdAtDate = null;
  let month = "";
  let day = 0;

  if (post) {
    createdAtDate = new Date(post.created_at);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "October", "Nov", "Dec"
    ];
    month = monthNames[createdAtDate.getMonth()];
    day = createdAtDate.getDate();
  }

  const userDataForProfile = JSON.parse(sessionStorage.getItem("UserData"));


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






  return (
    <div>
      <MainPageBar />
      {post && (
        <div className="SingleUserPost_outerDiv">
          <div className="SingleUserPost_outerDiv1">
            <div className="SingleUserPost_outerDiv2">
              <div className="SingleUserPost_outerDiv3">
                <div className="SingleUserPost_nav">
                  <div className="SingleUserPost_nav_img">
                    <Link>
                      <div>
                        <img
                          src={post.user_postImg}
                          alt={`Profile of ${post.username}`}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="SingleUserPost_nav_close">
                    <button className="SingleUserPost_nav_icon_btn">
                      <IoCloseOutline className="newNotebtn" />
                    </button>
                  </div>
                  <div className="SingleUserPost_nav_navbtns">
                    <button className="upgradebtn">
                      <div>Upgrade to paid</div>
                    </button>
                    <button className="SingleUserPost_nav_icon_btn">
                      <IoEllipsisHorizontal className="SingleUserPost_nav_icon" />
                    </button>
                  </div>
                </div>

                <div className="SingleUserPost_mainPost">
                  <div className="SingleUserPost_mainPost_upNdDownBtn">
                    <button>
                      <IoChevronUp />
                    </button>
                    <button>
                      <IoChevronDown />
                    </button>
                  </div>
                  <div className="SingleUserPost_mainPost_act">
                    <article>
                      <div className="SingleUserPost_mainPost_act_outerdiv">
                        <div className="SingleUserPost_mainPost_act_innerdiv">
                          <div className="SingleUserPost_mainPost_dateAndPage">
                            <Link className="link1">
                              Letters from a user
                            </Link>
                            <div className="fordate">
                              <Link>{`${month} ${day}`}</Link>
                            </div>
                          </div>
                          <div className="SingleUserPost_mainPost_userNameAndDate">
                            <div className="SingleUserPost_mainPost_userNameAndDate_outerdiv">
                              <div className="SingleUserPost_mainPost_userNameAndDate_innerdiv">
                                <div className="SingleUserPost_mainPost_userNameAndDate_innerdiv1">
                                  <Link>{userDataForProfile.name}</Link>
                                </div>
                              </div>
                              <div className="SingleUserPost_mainPost_userNameAndDate_date">
                                <div>{`${month} ${day}`}</div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div>
                        <div className="available-content reader_post_content">
                          <div className="reader_post_content_markup">
                            <p>{post.text}</p>
                          </div>
                        </div>
                        <div className="pppdk"></div>
                        <div className="SingleUserPost_mainPost_LikesRestacks">
                          <div className="SingleUserPost_mainPost_LikesRestacks_main">
                            <div className="forLikeImgMain">
                              <div className="forLikeImgMain11">
                                <div className="forLikeImgpersons">
                                  <Link>
                                    <img
                                      src={LikeImg}
                                      alt="Like Icon"
                                    />
                                  </Link>
                                </div>
                                {/* Repeat the LikeImgpersons block for other like images */}
                              </div>
                            </div>

                            <div
                              className="forLikepersonlikes"
                              onClick={handleOpenModal2}
                            >
                              <span>
                                <Link>{post.likes} Likes</Link>
                              </span>
                            </div>
                            <div className="forLikepersondot">.</div>
                            <div className="forLikepersonlikes">
                              <span>
                                <Link>{post.restacks} Restacks</Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="SingleUserPost_LikesAndComment">
                  <div className="SingleUserPost_LikesAndComment_main">
                    <div className="SingleUserPost_LikesAndComment_main1">
                      <button onClick={handleLikeClick}>
                        <IoHeartOutline className={`Imgee ${likeIcon ? 'imgliked' : ''}`} />
                        <div>{isLiked ? "Unlike" : "Like"}</div>
                        <div>{getLike.length}</div>
                      </button>
                    </div>

                    <div className="SingleUserPost_LikesAndComment_main1">
                      <button onClick={handleOpenModal3}>
                        <Link to={`/PostComments/${post._id}`}>
                          <IoChatbubbleOutline className="Imge" />
                        </Link>
                        <div>{getComment.length}</div>
                      </button>
                    </div>

                    <div className="SingleUserPost_LikesAndComment_main1">
                      <button>
                        <IoSyncOutline className="Imge" />
                        <div>{post.syncs}</div>
                      </button>
                    </div>

                    <div className="SingleUserPost_LikesAndComment_main1">
                      <button>
                        <IoCloudUploadOutline className="Imgee" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <LikesView isOpen={isModalOpen2} onClose={handleCloseModal2} />
      <CommentOnPost isOpen={isModalOpen3} onClose={handleCloseModal3} />
    </div>
  );
}

export default SingleUserPost;
