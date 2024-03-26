import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Intro from "../../Components/Intro/Intro";
import apiHandlers from "../../apiHandlers/apiHandlers";
import Animations from "../../Constants/Animations";
import "./Splash.css";

function Splash() {
  const navigate = useNavigate();

  // Function to figure out which route to proceed with
  const nextDestinationDecider = () => {
    // Checks Localstorage for any saved email and password
    const LSemail =
      apiHandlers.LocalstorageHandler.getFromLocalStorage("email");
    const LSpassword =
      apiHandlers.LocalstorageHandler.getFromLocalStorage("password");

    if (LSemail !== null && LSpassword !== null) {
      // An Auto Login Should be Attempted if user email and password are available
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };

  useEffect(() => {
    // Timeout used for animations
    setTimeout(() => {
      nextDestinationDecider();
    }, Animations.Intro.duration + 1000);
  }, []);

  return (
    <div className="SplashPage">
      <div className="G-IntroContainer">
        <Intro />
      </div>
    </div>
  );
}

export default Splash;
