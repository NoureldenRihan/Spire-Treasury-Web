import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import "./Signup.css";
import GenericButton from "../../Components/GenericButton/GenericButton";
import Navbar from "../../Components/Navbar/Navbar";
import GenericStatusMessage from "../../Components/GenericStatusMessage/GenericStatusMessage";

//TODO Needs to proceed when no error
//TODO Prevent New Requests Until Current one is done
//TODO Add Loading State to the sign up button
//TODO Make it Responsive for different screen sizes

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialCode, setSpecialCode] = useState("");
  const [showStatusMsg, setShowStatusMsg] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // organize state setters and getters for one time addition through a forEach
  const stateDistributer = [
    [firstName, setFirstName],
    [lastName, setLastName],
    [fullName, setFullName],
    [email, setEmail],
    [password, setPassword],
    [specialCode, setSpecialCode],
  ];

  const navigate = useNavigate();

  // Access User Creation required Data from Redux
  const createUserData = useSelector((state) => state.createUserData.userData);

  // signup function Groups Form Data and makes a "CreateUser" request through apiHandlers
  const signup = async (e) => {
    e.preventDefault();

    const signupFormData = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      password: password,
      specialCode: specialCode,
    };

    console.log(signupFormData);

    const data = await apiHandlers.CreateUser(signupFormData);
    console.log(data);
    if (data.didAnErrorOccur) {
      setIsStatusError(true);
      setStatusMsg(data.msg);
      setShowStatusMsg(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signupPage">
        <div className="signupContainer">
          <div>
            <h2>Create your Spire Treasury account</h2>
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
              <GenericButton text={"Sign Up"} />
              {showStatusMsg ? (
                <GenericStatusMessage
                  isError={isStatusError}
                  statusText={statusMsg}
                />
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
