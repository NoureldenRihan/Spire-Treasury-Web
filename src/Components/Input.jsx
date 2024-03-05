import { useState } from "react";

function Input({
  label,
  onChange,
  value,
  required = false,
  secureInput = false,
  keyboardType = "default",
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
          keyboardType={keyboardType}
          placeholder={placeholderText}
          required={required}
        />
        <button
          style={{ display: secureInput ? "flex" : "none" }}
          onPress={() => {
            setHidePassword((prevState) => !prevState);
          }}
        >
          eye
        </button>
      </div>
    </>
  );
}

export default Input;
