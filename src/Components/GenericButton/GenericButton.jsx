import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import "./GenericButton.css";

// A generic Button Component for Various Button Usages

function GenericButton({
  text,
  onClick,
  styleType = "type1",
  extra = false,
  extraBtnText,
  extraBtnOnClick,
  extraBtnStyleType,
  loading = true,
}) {
  return (
    <>
      {text ? (
        <>
          <button
            className={"commonButton" + " " + styleType}
            onClick={onClick}
            disabled={loading}
          >
            {loading ? <LoadingIndicator /> : text}
          </button>
          <br />
        </>
      ) : (
        ""
      )}
      {extra ? (
        <button
          className={"extraButton" + " " + extraBtnStyleType}
          onClick={extraBtnOnClick}
        >
          {extraBtnText}
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default GenericButton;
