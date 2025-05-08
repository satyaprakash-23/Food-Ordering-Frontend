import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useAuth.js";
import logo from "../assets/food-logo.avif";
import AuthModal from "./AuthModal.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUsers, toggleAuthStatus, logOut } from "../redux/slices/userSlice";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [initialAuthStatus, setinitialAuthStatus] = useState("LogIn");
  // const [authPageStatus, setAuthPageStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.user.loggedInStatus);
  console.log("IsLoggedIn " + authStatus);
  const items = useSelector((state) => state.cart.items);

  function toggleStatus() {
    // dispatch(toggleAuthStatus());
    // const authStatus = useSelector((state) => state.user.loggedInStatus);
    if (authStatus) {
      // setinitialAuthStatus("LogOut"); //logout
      // setAuthPageStatus(false);
      dispatch(logOut()); //when i clicked on logOut with authStatus true it means we have to logOut and make the authstatus false;
      navigate("/");
    } else {
      // setinitialAuthStatus("LogIn"); //login
      // setAuthPageStatus(true);

      navigate("/auth");
    }
  }

  // console.log(authStatus);
  // console.log("authStatus" + initialAuthStatus);
  // useEffect(() => {
  //   if (authStatus) {
  //     setinitialAuthStatus("Logout");
  //   } else {
  //     setinitialAuthStatus("Login");
  //   }
  // }, [authStatus]);

  return (
    <nav className="sticky top-0 shadow flex justify-between mr-2 bg-gray-400 text-blue-900 font-bold z-10">
      {/* <div className=""> */}
      <img className="h-20" src={logo} alt="Logo" />
      <ul className="flex space-x-4">
        <li className="mt-6 flex">
          <Link to="/checkOut" className="flex hover:bg-gray-600 h-6">
            {" "}
            {items.length}
            <ShoppingCart />
          </Link>
        </li>
        <li className="mt-6">
          <Link to="/">Home</Link>
        </li>
        <li className="mt-6">
          <Link to="/about">About Us</Link>
          {/* <button>About Us</button> */}
        </li>
        <li className="mt-6">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mt-6">
          <Link to="/Instamart">Instamart</Link>
        </li>
        <li className="mt-6">
          <h2>OnlineStatus {useOnline() ? "🟢" : "🔴"}</h2>
        </li>
        <li>
          <button className="mt-6" onClick={toggleStatus}>
            {authStatus ? "Logout" : "Login"}
            {/* {initialAuthStatus} */}
          </button>
        </li>
       
      </ul>
      {/* {authPageStatus ? <AuthModal /> : null}; */}
      {/* </div> */}
    </nav>
  );
};

export default Header;
