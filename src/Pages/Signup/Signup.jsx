import { useSelector } from "react-redux";
import Input from "../../Components/Input";
import "./Signup.css";

function Signup() {
  const darkMode = useSelector((state) => state.currentSessionData.darkMode);
  const createUserData = useSelector((state) => state.createUserData.userData);
  return (
    <>
      <h1>Signup</h1>
      {createUserData.map((Data) => (
        <Input
          key={Data.fieldName}
          label={Data.fieldName}
          required={Data.required}
          keyboardType={Data.fieldType}
          placeholderText={Data.placeholderText}
          secureInput={Data.secureInput}
        />
      ))}
    </>
  );
}

export default Signup;
