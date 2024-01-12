import React, { useReducer, useState } from "react";
import "./styles.css";

const initialState = { name: "", names: ["test"] };

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    // case "UPDATE_NAME":
   //   const updatedNames = [...state.names];
   //   updatedNames[action.payload.index] = state.name;
   //   return { ...state, names: updatedNames, name: "" };

    case "ADD_NAME":
      return { ...state, names: [...state.names, state.name], name: "" };

    case "DELETE_NAME":
      const updatedArr = state.names.filter(
        (_, index) => index !== action.payload
      );
      return { ...state, names: updatedArr };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {state.names.map((name, i) => (
        <div key={i} className="divtest">
          {name}
          <button onClick={() => dispatch({ type: "DELETE_NAME", payload: i })}>
            delete
          </button>
        </div>
      ))}

      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }   
      />
      {/*
      <button
        onClick={() => dispatch({ type: "UPDATE_NAME", payload: { index: 0 } })}
      >
        update
      </button>
      */}
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>add</button>
    </div>
  );
}
