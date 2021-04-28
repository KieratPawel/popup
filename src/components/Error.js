const Error = ({ setTrigger }) => {
  return (
    <>
      <div className="background" onClick={() => setTrigger(false)}></div>
      <div className="popup">
        <div
          className="popup__close-button"
          onClick={() => setTrigger(false)}
        ></div>
        <div className="popup__message">
          Ups. Coś poszło nie tak. Odśwież stronę lub spróbuj ponownie później.
        </div>
      </div>
    </>
  );
};

export default Error;
