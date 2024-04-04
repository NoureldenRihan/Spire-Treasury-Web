import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import GenericButton from "../../Components/GenericButton/GenericButton";
import Navbar from "../../Components/Navbar/Navbar";
import GenericStatusMessage from "../../Components/GenericStatusMessage/GenericStatusMessage";
import "./Login.css";

//TODO Setup login and sign up to save data to local storage to prevent every session login
//TODO Setup Auto Login (After Signup and if credentials are available in local storage)

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [showStatusMsg, setShowStatusMsg] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // organize state setters and getters for one time addition through a forEach function
  const stateDistributer = [
    [email, setEmail],
    [password, setPassword],
  ];

  const navigate = useNavigate();

  // Access User Login required Data from Redux
  const loginUserData = useSelector((state) => state.loginUserData.userData);

  // login function Groups Form Data and makes a "LoginUser" request through apiHandlers
  const login = async (e) => {
    e.preventDefault();
    setRequestInProgress(true);

    const loginFormData = {
      email: email,
      password: password,
    };

    console.log(loginFormData);

    const response = await apiHandlers.LoginUser(loginFormData);
    console.log(response);

    if (response.status === 200) {
      navigate("/home");
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
      <div className="loginPage">
        <div className="loginContainer">
          <h2 className="loginDescription">
            Login to your Spire Treasury account
          </h2>
          <div className="goToLogin">
            <p>Don't Have An Account?</p>
            <GenericButton
              extra={true}
              extraBtnText={"Sign Up"}
              extraBtnStyleType={"extraType2"}
              extraBtnOnClick={() => navigate("/signup")}
            />
          </div>

          <form onSubmit={login} className="loginForm">
            {loginUserData.map((Data, index) => (
              <GenericInput
                key={Data.fieldName}
                label={Data.fieldName}
                value={stateDistributer[index][0]}
                onChange={(e) => {
                  stateDistributer[index][1](e.target.value);
                }}
                required={Data.required}
                type={Data.fieldType}
                placeholderText={Data.placeholderText}
                secureInput={Data.secureInput}
              />
            ))}
            <GenericButton text={"Log In"} loading={requestInProgress} />
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

export default Login;