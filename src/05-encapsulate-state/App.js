import React, { useState } from "react";
import { usePicture } from "./usePicture";

export const App = () => {
  let [date, setDate] = useState("1999-03-05");
  let picture = usePicture(date);

  if (!picture || !picture.title) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <h2>{picture.title}</h2>
      <div>{picture.explanation}</div>
      <img src={picture.url} alt={picture.title} />
    </>
  );
};
