import { useSelector } from "react-redux";
import { useState } from "react";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialCode, setSpecialCode] = useState("");

  const stateDistributer = [
    [firstName, setFirstName],
    [lastName, setLastName],
    [fullName, setFullName],
    [email, setEmail],
    [password, setPassword],
    [specialCode, setSpecialCode],
  ];

  const createUserData = useSelector((state) => state.createUserData.userData);

  const doit = () => {
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
    <>
      <h1>Signup</h1>
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
      <br />
      <br />
      <br />
      <button onClick={doit}>Do It</button>
    </>
  );
}

export default Signup;
