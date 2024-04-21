import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import GenericButton from "../../Components/GenericButton/GenericButton";
import Navbar from "../../Components/Navbar/Navbar";
import GenericStatusMessage from "../../Components/GenericStatusMessage/GenericStatusMessage";
import bcrypt from "bcryptjs-react";
import AutoLogin from "../../Functions/Single Functions/AutoLogin";
import { FunctionsToolBox } from "../../Functions/FunctionsToolBox";
import { currentSessionSlice } from "../../Redux/Slices/currentSessionSlice";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialCode, setSpecialCode] = useState("");
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [showStatusMsg, setShowStatusMsg] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // organize state setters for one time addition through a forEach function
  const stateSetters = [
    setFirstName,
    setLastName,
    setFullName,
    setEmail,
    setPassword,
    setSpecialCode,
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access User Creation required Data from Redux
  const createUserData = useSelector((state) => state.createUserData.userData);

  // signup function Groups Form Data and makes a "CreateUser" request through apiHandlers
  const signup = async (e) => {
    e.preventDefault();
    setRequestInProgress(true);

    // Password Hashing
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const signupFormData = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      password: hashedPassword,
      specialCode: specialCode,
    };

    console.log(signupFormData);

    const response = await apiHandlers.CreateUser(signupFormData);
    console.log(response);

    if (response.status === 200) {
      dispatch(currentSessionSlice.actions.setUserEmail(email));
      await FunctionsToolBox.LocalForageFunctions.saveLoginData(
        email,
        password
      );
      const nextDestination = await AutoLogin();
      navigate(nextDestination);
    } else if (response.status === 500) {
      if (response.data.didAnErrorOccur) {
        setIsStatusError(true);
        setStatusMsg(response.data.msg);
        setShowStatusMsg(true);
      }
    }

    setRequestInProgress(false);
  };

  return (
    <>
      <Navbar />
      <div className="signupPage">
        <div className="signupContainer">
          <h2 className="signupDescription">
            Create your Spire Treasury account
          </h2>
          <div className="goToLogin">
            <p>Already Have An Account?</p>
            <GenericButton
              extra={true}
              extraBtnText={"Login"}
              extraBtnStyleType={"extraType2"}
              extraBtnOnClick={() => navigate("/login")}
            />
          </div>

          <form onSubmit={signup} className="signupForm">
            {createUserData.map((Data, index) => (
              <GenericInput
                key={Data.fieldName}
                onChange={(e) => {
                  stateSetters[index](e.target.value);
                }}
                {...Data}
              />
            ))}
            <GenericButton text={"Sign Up"} loading={requestInProgress} />
          </form>
          {showStatusMsg ? (
            <GenericStatusMessage
              isError={isStatusError}
              statusText={statusMsg}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
