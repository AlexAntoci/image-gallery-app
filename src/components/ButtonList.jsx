import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ButtonList({
  setActiveGenre,
  activeGenre,
  imgArray,
  filteredImgArray,
  setFilteredImgArray,
  arrayOfImages,
  result,
}) {
  // Aici are loc filtrarea imaginilor conform Theme-ului
  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredImgArray(imgArray);
      return;
    }

    result = imgArray.map((value, index) =>
      value.filter((picture) => picture.genre_ids.includes(activeGenre))
    );

    setFilteredImgArray(result);
  }, [activeGenre]);

  return (
    <div className="buttonList">
      <div className="innerButtonList">
        <button className="search buttonListItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="searchIcon"
            viewBox="0 0 512 512"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
        </button>
        <button className="buttonListItem" onClick={() => setActiveGenre(0)}>
          mixed
        </button>
        <button className="buttonListItem" onClick={() => setActiveGenre(28)}>
          Action
        </button>
        <button className="buttonListItem" onClick={() => setActiveGenre(35)}>
          Commedy
        </button>
      </div>
    </div>
  );
}

export default ButtonList;
