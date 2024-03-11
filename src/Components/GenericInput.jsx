import { useState } from "react";

// A generic Input Component for Various Input Usages

function GenericInput({
  label,
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
      <label>{label}</label>
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
