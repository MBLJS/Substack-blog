import { Link } from 'react-router-dom';
import './css/DashBoardHome.css';
import { IoMdCart } from 'react-icons/io';
import { RiBellFill, RiMailFill, RiPencilFill, RiDeleteBin6Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BsBellFill, BsFillBoxFill } from "react-icons/bs";
import { IoAddSharp, IoHomeOutline, IoPeopleCircleOutline, IoPersonAddSharp } from 'react-icons/io5';
import DashBoardNav from './Component/DashBoardNav';
function DashBoardHome() {

  return (
    <div className='dashHome'>
      <DashBoardNav />
      <div className='dashHomeMainCon'>
        <div className="topMain">
          <div className='dashadminnav'>
            <div className="Admin">
              <h2>Admin</h2>
            </div>
            <div className="admin-icon">
              <Link to="#"><BsBellFill size={25} className='dashHomeIcon' /></Link>
              <Link to="#"><RiMailFill size={25} className='dashHomeIcon' /></Link>
              <div className="user-img">
                <Link><FaUserCircle size={25} className='dashHomeIcon' /></Link>
              </div>
              <span>Suleiman</span>
            </div>
          </div>


          <div className="counter">
            <div className="count1">
              <BsFillBoxFill size={60} />
              <div className="count1-value">
                <span>Total Account</span>
                <p>0</p>
              </div>
            </div>

            <div className="count2">
              <FaUserCircle size={60} />
              <div className="count2-value">
                <span>Total User</span>
                <p>0</p>
              </div>
            </div>
          </div>
          <hr className='admin-hr' />
        </div>


      </div>



    </div>
  );
}

export default DashBoardHome;
