import "./GenericButton.css";

// A generic Button Component for Various Button Usages

function GenericButton({
  text,
  onClick,
  styleType = "type1",
  extra = false,
  extraText,
  extraOnClick,
}) {
  return (
    <>
      <button className={"commonButton" + " " + styleType} onClick={onClick}>
        {text}
      </button>
      <br />
      {extra ? (
        <button className={"extraButton"} onClick={extraOnClick}>
          {extraText}
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default GenericButton;
