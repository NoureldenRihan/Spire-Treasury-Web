import { useState } from "react";
import { Eye, ClosedEye, UnifiedSVGSize } from "../../Constants/Icons";
import "./GenericInput.css";

// A generic Input Component for Various Input Usages

function GenericInput({
  label,
  showlabel = true,
  onChange,
  inputType = "Normal",
  options,
  required = false,
  secureInput = false,
  type = "default",
  placeholderText,
}) {
  const [hidePassword, setHidePassword] = useState(true);

  const selectOption = (option) => {
    const elements = document.getElementsByClassName("radioOption");

    // Remove 'selected' class from every radio option
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("selected");
    }

    // add 'selected' class to the selected radio option
    document.getElementById(option).classList.add("selected");

    onChange(option);
  };

  return (
    <>
      {inputType === "Normal" ? (
        <>
          {showlabel ? (
            <label className="GenericInputLabel">{label}</label>
          ) : (
            ""
          )}
          <div className="GenericInputContainer">
            <input
              className={
                secureInput ? "GenericInputField eyeIcon" : "GenericInputField"
              }
              onChange={onChange}
              type={
                secureInput ? (hidePassword ? "password" : "default") : type
              }
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
      ) : inputType === "Radio" ? (
        <>
          {showlabel ? (
            <label className="GenericInputLabel">{label}</label>
          ) : (
            ""
          )}
          <div className="GenericInputRadio">
            {options.map((option) => (
              <p
                id={option}
                className="radioOption"
                onClick={() => {
                  selectOption(option);
                }}
              >
                {option}
              </p>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default GenericInput;
