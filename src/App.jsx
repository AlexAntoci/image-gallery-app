import "./styles/App.css";
import "./styles/Nav.css";
import "./styles/ImgCard.css";
import "./styles/ImgSlider.css";
import "./styles/ButtonList.css";
import "./styles/SlideBar.css";
import ImgSlider from "./components/ImgSlider";
import Navigation from "./components/Nav.jsx";
import ImgCard from "./components/ImgCard";
import ButtonList from "./components/ButtonList";
import SlideBar from "./components/SlideBar";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  /* Am definit unele variabile care vor fi utilizate de catre alte componente cu scopul de a avea posibilitatea
  sa stochez sirul de imagini care mai apoi sa fie filtrate la componentul 'ButtonList'*/
  let result;
  let arrayPages = [1, 2, 3];
  let arrayOfImages = [];
  let [imgArray, setImgArray] = useState([]);
  let [filteredImgArray, setFilteredImgArray] = useState([]);
  let [activeGenre, setActiveGenre] = useState(0);

  function openSideBar(e) {
    let sideBar = document.querySelector(".slidebarArea");
    let sideBarImage = document.querySelector(".image");

    sideBar.style.display = "block";
    sideBarImage.src = e.target.src;
  }

  return (
    <div className="appContainer">
      <Navigation></Navigation>
      <SlideBar />
      <ButtonList
        imgArray={imgArray}
        filteredImgArray={filteredImgArray}
        setFilteredImgArray={setFilteredImgArray}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        arrayOfImages={arrayOfImages}
        result={result}
      ></ButtonList>
      {/* Aici am facut un ciclu care va genera atatea slide-uri cat numarul de elemente din 'arrayPages'*/}
      {arrayPages.map(function (value, index) {
        return (
          <ImgSlider
            key={index}
            page={value}
            imgArray={imgArray}
            setImgArray={setImgArray}
            arrayOfImages={arrayOfImages}
            filteredImgArray={filteredImgArray}
            setFilteredImgArray={setFilteredImgArray}
            result={result}
            activeGenre={activeGenre}
            openSideBar={openSideBar}
          ></ImgSlider>
        );
      })}
    </div>
  );
}

export default App;
