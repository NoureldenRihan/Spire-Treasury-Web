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
}) {
  return (
    <>
      {text ? (
        <>
          <button
            className={"commonButton" + " " + styleType}
            onClick={onClick}
          >
            {text}
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
