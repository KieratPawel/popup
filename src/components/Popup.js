import React, { useState, useEffect, useReducer } from "react";
import { pickReducer } from "../utils/pickReducer";
import { fetchData } from "../utils/fetchData";
import { cacheData } from "../utils/cacheData";
import Items from "./Items";
import Versions from "./Versions";
import Order from "./Order";
import Loader from "./Loader";
import Error from "./Error";

const Popup = ({ setTrigger, source }) => {
  const [pick, dispatch] = useReducer(pickReducer, null);
  const [product, setProduct] = useState(null);
  const [items, setItems] = useState(null);
  const [versions, setVersions] = useState(null);
  const [status, setStatus] = useState("load");

  const fetchArgs = {
    dispatch,
    setProduct,
    setItems,
    setVersions,
    setStatus,
    source,
  };

  useEffect(() => fetchData(fetchArgs), []); // eslint-disable-line
  useEffect(() => cacheData(pick), [pick]);

  if (status === "load") return <Loader setTrigger={setTrigger} />;
  if (status === "err") return <Error setTrigger={setTrigger} />;

  const price = (
    (Number(pick?.item.price) +
      Number(pick?.version.products[0].price_difference)) *
    pick?.amount
  )
    .toFixed(2)
    .replace(".", ",");

  return (
    <>
      <div className="background" onClick={() => setTrigger(false)}></div>
      <div className="popup">
        <div className="popup__image-container">
          <img
            className="popup__image"
            src={pick?.version.products[0].url}
            alt="zdjęcie produktu"
          />
        </div>
        <div className="popup__menu">
          <div className="popup__header">{product.name}</div>
          <div
            className="popup__close-button"
            onClick={() => setTrigger(false)}
          ></div>
          <div className="popup__price">{price + " zł"}</div>
          <Items items={items} pick={pick} dispatch={dispatch} />
          <Versions versions={versions} dispatch={dispatch} />
          <Order
            pick={pick}
            dispatch={dispatch}
            setStatus={setStatus}
            setTrigger={setTrigger}
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
