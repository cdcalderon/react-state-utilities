import React, { useEffect, useState } from "react";
import { useNetwork } from "./useNetwork";

export const usePicture = (date) => {
  let { data, loading } = useNetwork({
    url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
  });

  return { picture: data, loading };
};
//   let [picture, setPicture] = useState();
//   useEffect(() => {
//     const fetchPicture = async (date, setPicture) => {
//       try {
//         const response = await fetch(
//           `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
//         );
//         const json = await response.json();
//         setPicture(json);
//       } catch (error) {
//         console.log(error);
//         return null;
//       }
//     };

//     fetchPicture(date, setPicture);
//   }, [date]);

//   return picture;
// };

//`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
