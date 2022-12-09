import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "clickedButton":
      return { ...state, count: state.count + 1 };
    case "setUsername":
      return { ...state, username: action.username };

    default:
      return state;
  }
};

export const App = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0, username: "" });

  return (
    <>
      <button onClick={(e) => dispatch({ type: "clickedButton" })}>
        click me
      </button>
      the count is: {state.count}
      <input
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "setUsername", username: e.target.value })
        }
      />
      the username is: {state.username}
    </>
  );
};
