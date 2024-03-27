import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import "./Signup.css";
import GenericButton from "../../Components/GenericButton/GenericButton";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialCode, setSpecialCode] = useState("");

  const navigate = useNavigate();

  const stateDistributer = [
    [firstName, setFirstName],
    [lastName, setLastName],
    [fullName, setFullName],
    [email, setEmail],
    [password, setPassword],
    [specialCode, setSpecialCode],
  ];

  const createUserData = useSelector((state) => state.createUserData.userData);

  const signup = () => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      password: password,
      specialCode: specialCode,
    });
    apiHandlers.CreateUser({
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      password: password,
      specialCode: specialCode,
    });
  };

  return (
    <div className="signupPage">
      <div className="signupContainer">
        <div>
          <h2>Welcome,</h2>
          <h3>Please Enter Your Info for Signing Up</h3>
          <h3>Already Have An Account?</h3>
          <GenericButton
            text={"Login"}
            styleType="type2"
            onClick={() => navigate("/login")}
          />
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
  );
}

export default Signup;
