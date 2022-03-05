import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import {
  addCount,
  decCount,
  multiCount,
  diviCount,
  resetCount
} from "./action/index";
function App(props) {
  return (
    <div className="App">
      <h1>🧮🧮Counter 🧮🧮</h1>
      <div className="calDiv">
        <h3 className="count">Count : {props.countReducer} </h3>
      </div>
      <div className="calDiv">
        <button onClick={props.addCount}>+</button>
        <button onClick={props.decCount}>-</button>
        <button onClick={props.multiCount}>x</button>
        <button onClick={props.diviCount}>/</button>
        <button onClick={props.resetCount}>Reset</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    countReducer: state.countReducer
  };
};
const mapDispatchToProps = {
  addCount,
  decCount,
  multiCount,
  diviCount,
  resetCount
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
