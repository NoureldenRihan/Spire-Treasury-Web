import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSessionSlice } from "../../Redux/Slices/currentSessionSlice";
import { FunctionsToolBox } from "../../Functions/FunctionsToolBox";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();

  const currentUserEmail = useSelector(
    (state) => state.currentSessionData.userEmail
  );
  const userName = useSelector((state) => state.currentSessionData.userName);

  useEffect(() => {
    const setupUserData = async () => {
      const currentUserData = await FunctionsToolBox.GetUserData({
        email: currentUserEmail,
      });
      dispatch(
        currentSessionSlice.actions.setUserName(
          currentUserData.data.user.fullName
        )
      );
      dispatch(
        currentSessionSlice.actions.setUserData(currentUserData.data.user)
      );
    };
    setupUserData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Welcome, {userName}</h1>
    </>
  );
}

export default Home;
