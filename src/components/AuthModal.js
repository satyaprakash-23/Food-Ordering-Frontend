import { useDispatch } from "react-redux";
import { addUsers, toggleAuthStatus } from "../redux/slices/userSlice";
import User from "./User";
import { useState } from "react";
import userData from "./userData";
import { useNavigate } from "react-router-dom";

const AuthModal = (authStatus) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate()
  console.log(userName);
  console.log(userData);
  const data = userData;
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  // const handleUser = () => {
  //   // dispatch(
  //   //   addUsers({
  //   //     userId: userName,
  //   //     passwd: password,
  //   //   })
  //   // );
  //   for(const i=0; i<data.length; i++){
  //     if(data[i].userName===userName && data[i].password===password){
  //       dispatch(loggedInStatus());
  //     }
  //   }

  // };
  const handleUser = () => {
    
    console.log("Submit button clicked ✅");
    const foundUser = userData.find(
      (u) => u.userName === userName && u.password === password
    );

    if (foundUser) {
      console.log("✅ Valid login!");
      dispatch(toggleAuthStatus());
      navigate("/")
    } else {
      console.log("❌ Invalid credentials!");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <User />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email or Username
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                // console.log(e.target.value)
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                // console.log(e.target.value)
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200"
            onClick={handleUser}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button className="text-gray-600 hover:underline mt-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
