import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentSessionSlice } from "../../Redux/Slices/currentSessionSlice";
import { FunctionsToolBox } from "../../Functions/FunctionsToolBox";
import Navbar from "../../Components/Navbar/Navbar";
import Logout from "../../Components/Logout/Logout";
import "./Home.css";

//TODO Fix Error of revisiting Home Page

function Home() {
  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.currentSessionData.userEmail);
  const userData = useSelector((state) => state.currentSessionData.userData);
  const userName = useSelector((state) => state.currentSessionData.userName);

  const getFreshUserData = async () => {
    const currentUserData = await FunctionsToolBox.GetUserData({
      email: userEmail,
    });
    console.log(currentUserData);
    dispatch(
      currentSessionSlice.actions.setUserName(
        currentUserData.data.secureUserData.fullName
      )
    );
    dispatch(
      currentSessionSlice.actions.setUserData(
        currentUserData.data.secureUserData
      )
    );
  };

  useEffect(() => {
    getFreshUserData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 onClick={() => console.log(userData)}>Welcome, {userName}</h1>
      <Logout />
      {userData.balances?.length > 0 && userData.balances?.length < 4 // Needs Fixing
        ? userData.balances?.map((balance) => {
            <div>
              <h1>Balance</h1>
            </div>;
          })
        : ""}
      {userData.balances?.length < 3 ? (
        <div>
          <Link to={"/balances/open"}>
            <h1>Open a New Balance</h1>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
