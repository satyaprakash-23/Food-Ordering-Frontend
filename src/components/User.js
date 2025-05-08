import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector((state) => state.user.users);
  const isLoggedIn = useSelector((state) => state.user.loggedInStatus);

  const authStatus = useSelector((state)=>state.user.loggedInStatus)
  return (
    <div>
      <h1>{users.length}</h1>
      <h2>{isLoggedIn ? "User is Logged In ✅" : "User is Not Logged In ❌"}</h2>
      {users.map((user)=>{
        console.log(user);
        
      })}
    </div>
  );
};

export default User;
