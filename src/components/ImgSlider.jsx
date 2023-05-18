import React from "react";
import ImgCard from "./ImgCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function ImgSlider({
  page,
  imgArray,
  setImgArray,
  arrayOfImages,
  filteredImgArray,
  setFilteredImgArray,
  result,
  activeGenre,
  openSideBar,
}) {
  /* Am facut unele State-uri pentru a stoca un anumit set de imagini (20 de imagini pentru fiecare slide) 
    images este variabila care va contine setul de imagini originale, filtered va fi o copie care va stoca
    setul de imagini dar care vom face filtrarea. Width este variabila care defineste lungimea slide-ului.
  */
  const slider = useRef();
  const [images, setImages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [width, setWidth] = useState(0);

  // Aici am facut Fetch la imagini si am atribuit rezultatul la variabilele de mai sus
  const fetchImages = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/popular/?api_key=86945557320a70df6b198a26b392618d&page=${page}`
    );
    const response = await request.json();
    arrayOfImages.push(response.results);

    setImgArray(arrayOfImages);
    setFilteredImgArray(arrayOfImages);
    setImages(arrayOfImages[page - 1]);
    setFiltered(arrayOfImages[page - 1]);
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    console.log();
  };
  useEffect(() => {
    fetchImages().then(function () {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    });
  }, []);

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, [filtered]);

  useEffect(() => {
    setFiltered(filteredImgArray[page - 1]);
  }, [activeGenre]);
  /* Pentru a putea apasa pe imagini si a le vizualiza, la ImgCard.css trebuie de sters 'pointer-events' 
  dar asta va face ca slide-ul sa nu fie 'draggable' la imagini, ci la locul liber a acestora*/
  return (
    <motion.div whileTap={{ cursor: "grabbing" }} className="imgSlider">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="imgInnerSlider"
        ref={slider}
        layout
        onClick={function (e) {
          openSideBar(e);
        }}
      >
        <AnimatePresence>
          {/* Elementul ar trebui sa fie 'filtered' in loc de 'images' , 
          dar la primul render apare o eroare, dar daca facem render cu images si dupa in cod schimbam cu filtered si facem Save 
          dar fara refresh, filtrarea va functiona, din pacate nu inteleg de ce eroarea data persista deoarece practic la primul 
          render 'images' si 'filtered' au aceasi valoare (un array de imagini).*/}
          {images.map((picture, index) => {
            return <ImgCard key={index} picture={picture}></ImgCard>;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default ImgSlider;
