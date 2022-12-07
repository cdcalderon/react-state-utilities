import React, { useState } from "react";

const Status = ({ onEnter }) => {
  let [message, setMessage] = useState("");
  return (
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage((m) => (m = e.target.value))}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          onEnter(message);
          setMessage("");
        }
      }}
    />
  );
};

export default Status;
