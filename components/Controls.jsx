import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef(null);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    const value = inputElement.current.value;
    if (value) {
      dispatch({
        type: "ADD",
        payload: {
          num: parseInt(value, 10),
        },
      });
      inputElement.current.value = "";
    }
  };

  const handleSubtract = () => {
    const value = inputElement.current.value;
    if (value) {
      dispatch({
        type: "SUBTRACT",
        payload: {
          num: parseInt(value, 10),
        },
      });
      inputElement.current.value = "";
    }
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleIncrement}
        >
          Increase
        </button>

        <button
          type="button"
          className="btn btn-info"
          onClick={handleDecrement}
        >
          Decrease
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-success" onClick={handleAdd}>
          ADD
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
