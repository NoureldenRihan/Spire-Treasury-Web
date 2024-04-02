import { useState } from "react";
import "./GenericInput.css";
import { Eye, ClosedEye, UnifiedSVGSize } from "../../Constants/Icons";

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
      {showlabel ? <label className="GenericInputLabel">{label}</label> : ""}
      <div className="GenericInputContainer">
        <input
          className={
            secureInput ? "GenericInputField eyeIcon" : "GenericInputField"
          }
          onChange={onChange}
          type={secureInput ? (hidePassword ? "password" : "default") : type}
          placeholder={placeholderText}
          required={required}
        />
        <div
          className="GenericInputSecureIcon"
          style={{ display: secureInput ? "flex" : "none" }}
          onClick={() => {
            setHidePassword((prevState) => !prevState);
          }}
        >
          {hidePassword ? (
            <ClosedEye width={UnifiedSVGSize} height={UnifiedSVGSize} />
          ) : (
            <Eye width={UnifiedSVGSize} height={UnifiedSVGSize} />
          )}
        </div>
      </div>
    </>
  );
}

export default GenericInput;
