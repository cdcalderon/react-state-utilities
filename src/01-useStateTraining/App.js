import React, { useState } from "react";
import Status from "./Status";

export const App = () => {
  let [messages, setMessages] = useState(["m1", "m2"]);
  return (
    <>
      <Status
        onEnter={(value) => {
          value && setMessages([value, ...messages]);
        }}
      />
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
    </>
  );
};
