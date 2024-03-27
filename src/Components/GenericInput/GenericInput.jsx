import { useState } from "react";
import "./GenericInput.css";

// A generic Input Component for Various Input Usages

function GenericInput({
  label,
  showlabel = true,
  onChange,
  value,
  required = false,
  secureInput = false,
  type = "default",
  placeholderText,
}) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      {showlabel ? <label>{label}</label> : ""}
      <div>
        <input
          onChange={onChange}
          value={value}
          type={secureInput ? (hidePassword ? "password" : "default") : type}
          placeholder={placeholderText}
          required={required}
        />
        <button
          style={{ display: secureInput ? "flex" : "none" }}
          onClick={() => {
            setHidePassword((prevState) => !prevState);
          }}
        >
          eye{/* Needs to be updated into an SVG Icon */}
        </button>
      </div>
    </>
  );
}

export default GenericInput;
