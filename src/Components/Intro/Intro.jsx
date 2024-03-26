import Animations from "../../Constants/Animations";
import "./Intro.css";

function Intro() {
  return (
    <>
      <img
        data-aos={Animations.Intro.type}
        data-aos-duration={Animations.Intro.duration}
        src="/images/Spire-Logo-Landscape-nobg.png"
        alt="Spire Treasury Logo"
      />
    </>
  );
}

export default Intro;
