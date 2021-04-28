const Loader = ({ setTrigger }) => {
  return (
    <>
      <div className="background" onClick={() => setTrigger(false)}></div>
      <div className="loader"></div>
    </>
  );
};

export default Loader;
