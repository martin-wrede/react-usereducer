import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const inistialState = { name: "x", names: ["test"] };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };

      case "ADD_NAME":
        return { ...state, names: [...state.names, state.name] };

      case "DELETE_NAME":
        const updatedArr = state.names.filter(
          (_, index) => index !== action.payload
        );
        return { ...state, names: updatedArr };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, inistialState);

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
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>add</button>
    </div>
  );
}
