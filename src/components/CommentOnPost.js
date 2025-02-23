import { IoCloseOutline } from "react-icons/io5";
import "./css/CommentOnPost.css";
import { Link, useParams } from "react-router-dom";
import userImg from "../Images/userImg.webp";
import { useRef, useState, useEffect } from "react";

function CommentOnPost({ isOpen, onClose }) {
  const { _id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(true);
  const pRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Moved the useEffect hook here
  useEffect(() => {
    if (_id && isOpen) {
      getpost();
    }
  }, [_id, isOpen]);

  if (!isOpen) {
    return null;
  }

  const modalClass = isOpen
    ? "UserPostModal_outer_div modal-overlay"
    : "UserPostModal_outer_div";

  const handleTextareaChange = (e) => {
    setComment(e.target.innerText);
    setIsTextareaEmpty(e.target.innerText.trim() === "");
  };

  const btn2Opacity = isTextareaEmpty ? 0.5 : 1;

  //get post
  const getpost = () => {
    fetch(`https://server-ctav.onrender.com/api/v3/post/${_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
      });
  };
  const limitPostContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  const userDataForProfile = JSON.parse(sessionStorage.getItem("UserData"));

  const handlecomment = async () => {
    const user_id = userDataForProfile._id;
    const post_id = _id;

    const comments = {
      user_id: user_id,
      post_id: post_id,
      comment: comment
    }

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

  return (
    <div className={modalClass}>
      <div className="likePostModal_outer_div">
        <div className="likePostModal_outerdiv1">
          <div className="likePostModal_opacityy">
            <div className="likeNubAndClose">
              <h1>Reply</h1>
              <button onClick={onClose}>
                <IoCloseOutline className="newNotebtn" />
              </button>
            </div>
            <div className="CommentOnPost_outerdiv">
              <div className="CommentOnPost_innerdiv">
                <div className="CommentOnPost_innerdiv11">
                  <div className="CommentOnPost_personthatpost">
                    <img src={userImg} alt="" />
                    <div className="CommentOnPost_personthatpost22">
                      <div className="CommentOnPost_personthatpost2233">
                        <div className="CommentOnPost_personthatpost2233_name">
                          <div className="CommentOnPost_personthatpost2233_name11">
                            <div className="CommentOnPost_personthatpost2233_name11_main">
                              <span className="s1">Robert Reich</span>
                              <span className="s2">6d</span>
                            </div>
                          </div>
                        </div>
                        <div className="CommentOnPost_personthatpost2233_mainpost">
                          <div className="CommentOnPost_personthatpost2233_mainpost11">
                            {post && <p className="p2">{limitPostContent(post.text, 200)}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CommentOnPost_mypost">
                    <img src={userImg} alt="" />
                    <div className="CommentOnPost_mypost11">
                      <div className="CommentOnPost_mypost22">
                        <div className="CommentOnPost_mypost33">
                          <p
                            contentEditable="true"
                            data-placeholder="Leave a reply"
                            ref={pRef}
                            onInput={handleTextareaChange}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rrrppp"></div>
                </div>
              </div>
            </div>
            <div className="photoAndPost">
              <button className="btn1" onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                <input type="file" accept="image/*,.heic" multiple="" ref={fileInputRef} />
              </button>
              <button className="btn2" disabled={isTextareaEmpty} style={{ opacity: btn2Opacity }} onClick={handlecomment}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentOnPost;
