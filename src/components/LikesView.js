import { IoCloseOutline } from "react-icons/io5";
import "./css/LikesView.css";
import userImg from "../Images/userImg.webp";
import { useRef } from "react";
import { Link } from "react-router-dom";

function LikesView({ isOpen, onClose }) {

  if (!isOpen) {
    return null;
  }

  const modalClass = isOpen ? "UserPostModal_outer_div modal-overlay" : "UserPostModal_outer_div";



  return (
    <div  className={modalClass}>
      <div className="likePostModal_outer_div">
        <div className="likePostModal_outerdiv1">
          <div className="likePostModal_opacity">
            <div className="likeNubAndClose">
              <h1>2,596 Likes</h1>
              <button onClick={onClose}>
                <IoCloseOutline className="newNotebtn" />
              </button>
            </div>
            <div className="peopleDatLike">
              <div className="peopleDatLike_divForAll">
                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>

                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>



                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>


                <div className="onePersonLike">
                  <Link>
                    <div className="likeAvatar">
                      <div>
                        <img src={userImg} alt="" />
                      </div>
                    </div>

                    <div className="likeNameAndPage">
                      <div className="likeName">
                        <div>Aram Zucker-Scharff</div>
                      </div>
                      <div className="likepage">
                        <div>Schizochronotopia</div>
                      </div>
                    </div>
                    <button className="likeBtnView">
                      Follow
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikesView;
