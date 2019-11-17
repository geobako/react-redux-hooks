import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "./selectors";
import { incrementCounter, decrementCounter } from "./actions";

function App() {
  const counter = useSelector(selectCounter);

  const dispatch = useDispatch();

  const increment = () => dispatch(incrementCounter());
  const decrement = () => dispatch(decrementCounter());

  return (
    <div className="App">
      <div style={styles.container1}>
        <h3>Counter:</h3>
        <h1>{counter}</h1>
      </div>

      <div style={styles.container2}>
        <button onClick={increment} style={styles.buttonGreen}>
          Increment
        </button>
        <button onClick={decrement} style={styles.buttonRed}>
          Decrement
        </button>
      </div>
    </div>
  );
}

const styles = {
  container1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  container2: {
    width: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonRed: {
    height: 50,
    width: 200,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    borderRadius: 10,
    border: "1px solid red"
  },
  buttonGreen: {
    width: 200,
    height: 50,
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    border: "1px solid green",
    borderRadius: 10
  }
};

export default App;
