function Testing() {
  return (
    <motion.div whileTap={{ cursor: "grabbing" }} className="imgSlider">
      <motion.div
        ref={slider}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="imgInnerSlider"
        layout
      >
        <AnimatePresence>
          {arrayOfImages.map((picture, index) => {
            return <ImgCard key={index} picture={picture}></ImgCard>;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
