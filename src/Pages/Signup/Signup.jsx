import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import "./Signup.css";
import GenericButton from "../../Components/GenericButton/GenericButton";
import Navbar from "../../Components/Navbar/Navbar";

//TODO Needs to show errors and proceed when no error
//TODO Values Need to be hidden from DOM

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialCode, setSpecialCode] = useState("");

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
  const signup = () => {
    const signupFormData = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      password: password,
      specialCode: specialCode,
    };

    console.log(signupFormData);
    apiHandlers.CreateUser(signupFormData);
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

            <div className="signupForm">
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
              <GenericButton text={"Sign Up"} onClick={signup} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
