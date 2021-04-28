import React, { useState } from "react";
import Popup from "./Popup";

function App() {
  const [trigger, setTrigger] = useState(false);
  const [source, setSource] = useState(null);

  return (
    <div className="page">
      <button
        className="page__button"
        onClick={() => {
          setSource("https://my-json-server.typicode.com/KieratPawel/popup/db");
          setTrigger(true);
        }}
      >
        Wyświetl produkt
      </button>
      {trigger ? <Popup setTrigger={setTrigger} source={source} /> : ""}
    </div>
  );
}

export default App;
