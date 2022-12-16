import React, { useEffect, useState } from "react";

export const usePicture = (date) => {
  let [picture, setPicture] = useState();
  useEffect(() => {
    const fetchPicture = async (date, setPicture) => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
        );
        const json = await response.json();
        setPicture(json);
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    fetchPicture(date, setPicture);
  }, [date]);

  return picture;
};

//`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
