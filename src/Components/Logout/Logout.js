import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentSessionSlice } from "../../Redux/Slices/currentSessionSlice";
import { FunctionsToolBox } from "../../Functions/FunctionsToolBox";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    console.log("Logging out...");
    dispatch(currentSessionSlice.actions.sessionLogout());
    await FunctionsToolBox.LocalForageFunctions.logout();
    navigate("/");
  };

  return (
    <div className="logout" onClick={logout}>
      logout
    </div>
  );
}

export default Logout;
