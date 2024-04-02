import "./GenericStatusMessage.css";

function GenericStatusMessage({ isError = false, statusText }) {
  return (
    <>
      {isError ? (
        <h1 className="statusText error">{statusText}</h1>
      ) : (
        <h1 className="statusText success">{statusText}</h1>
      )}
    </>
  );
}

export default GenericStatusMessage;
