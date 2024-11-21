import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import Mainpage from './pages/Mainpage';
import UserProfile from './pages/UserProfile';
import SingleUserPost from './pages/SingleUserPost';
import PostComments from './pages/PostComments';
import CreateAcct from './pages/CreateAcct';
import DashBoardNav from './DashBoard/Component/DashBoardNav';
import DashBoardHome from './DashBoard/DashboardHome';
import { UserProvider } from "./Contexts/UserContext"; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signInPage" element={<SignInPage />} />
            <Route path="/inbox" element={<Mainpage />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/SingleUserPost/:_id" element={<SingleUserPost />} />
            <Route path="/SingleUserPost" element={<SingleUserPost />} />
            <Route path="/PostComments/:_id" element={<PostComments />} />
            <Route path="/PostComments" element={<PostComments />} />
            <Route path="/CreateAcct" element={<CreateAcct />} />
            <Route path="/DashBoardHome" element={<DashBoardHome />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
