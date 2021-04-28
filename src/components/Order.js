import { ACTIONS } from "../utils/pickReducer";
import { submitOrder } from "../utils/submitOrder";

const Order = ({ pick, dispatch, setStatus, setTrigger }) => {
  const changeAmount = (direction) => {
    if (direction === "-") {
      dispatch({
        type: ACTIONS.CHANGE_AMOUNT,
        payload: { amount: --pick.amount },
      });
    } else if (direction === "+") {
      dispatch({
        type: ACTIONS.CHANGE_AMOUNT,
        payload: { amount: ++pick.amount },
      });
    } else throw new Error(`${direction} - unknown operator`);
  };

  const status = pick.amount > pick.item.amount ? false : true;

  return (
    <>
      <div className="popup__order">
        {status ? (
          <p className="popup__line">
            <b className="popup__line--green">&nbsp;&#x2714;</b>produkt dostępny
          </p>
        ) : (
          <p className="popup__line">
            <b className="popup__line--red">&#10060;</b>produkt niedostępny
          </p>
        )}

        <div className="popup__shipping">
          <span className="popup__icon">&#9201;</span>
          <div className="popup__shipping-container">
            <p className="popup__line">Możemy wysłać już dzisiaj</p>
            <a
              className="popup__link"
              href="https://www.dhl.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sprawdź czasy i koszty wysyłki
            </a>
          </div>
        </div>
      </div>
      <div className="popup__order">
        <div className="popup__amount">
          <div
            className="popup__amount-button"
            onClick={() => changeAmount("-")}
          >
            -
          </div>
          {pick.amount}
          <div
            className="popup__amount-button"
            onClick={() => changeAmount("+")}
          >
            +
          </div>
        </div>
        <button
          className={`popup__buy-button ${
            status ? "popup__buy-button--active" : ""
          }`}
          onClick={() => submitOrder({ setStatus, setTrigger, pick, status })}
        >
          Dodaj do koszyka
        </button>
      </div>
    </>
  );
};

export default Order;
