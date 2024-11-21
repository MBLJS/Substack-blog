import { IoCloseOutline } from "react-icons/io5";
import "./css/UserPostModal.css";
import newNoteImg from "../Images/byUserImg.webp";
import { useRef, useState } from "react";

function UserPostModal({ isOpen, onClose }) {
  const pTagRef = useRef(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState("");

  const [postt, setPostt] = useState(""); 

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  if (!isOpen) {
    return null;
  }

  const modalClass = isOpen ? "UserPostModal_outer_div modal-overlay" : "UserPostModal_outer_div";


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const userDataForProfile = JSON.parse(sessionStorage.getItem("UserData"));
  const handlePost = async () => {
    const user_id = userDataForProfile._id;
    const text = pTagRef.current.textContent;

    const post = {
      user_id: user_id,
      text: text,
      user_postImg: image, // Use the 'image' state variable
    };


    fetch("http://localhost:5500/api/v3/createpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post), // Send the 'post' object
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Post Created");
        console.log(data);
      });
};

// Function to convert Data URI to Blob
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  return blob;
}

return (
  <div className={modalClass}>
    <div className="UserPostModal_outer_div">
      <div className="UserPostModal_outerdiv1">
        <div className="UserPostModal_opacity">
          <div className="UserPostModal_opacity1"></div>
        </div>
        <div className="userPostModal_main">
          <div className="userPostModal_main1">
            <div className="userPostModal_main1_top">
              <div className="userPostModal_main1_top_left">
                <h3>New note</h3>
              </div>
              <button onClick={onClose}>
                <IoCloseOutline className="newNotebtn" />
              </button>
            </div>
            <div className="whatsYourmind?">
              <div className="whatsYourmind_1">
                <div className="whatsYourmind_2">
                  <div className="whatsYourmind_3_flex">
                    <picture>
                      <img src={newNoteImg} alt="" />
                    </picture>
                    <div className="whatsYourmind_3_flex_text">
                      <div className="whatsYourmind_3_flex_text1">
                        <div className="whatsYourmind_3_flex_text2">
                          <p
                            contentEditable="true" // Set contentEditable to true
                            placeholder="What's on your mind?"
                            data-placeholder="What's on your mind?"
                            onPaste={handleFileChange}
                            ref={pTagRef}
                            dangerouslySetInnerHTML={{ __html: postt }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="whatsYourmind_borderbottom"></div>
                </div>
              </div>
              <div className="whatsYourmind_bottom">
                <button className="postbtn1" onClick={handleButtonClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2" // Use camelCase instead of kebab-case
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-image"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </button>
                <input
                  type="file"
                  accept="image/*,.heic"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <button className="postbtn2" onClick={handlePost}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default UserPostModal;
