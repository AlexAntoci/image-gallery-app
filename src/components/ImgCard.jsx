import { motion } from "framer-motion";

function ImgCard({ picture }) {
  return (
    <motion.div
      layout
      className="imgCard"
      id={picture.genre_ids}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <img
        className="imgCardImage"
        src={`https://image.tmdb.org/t/p/w500` + picture.backdrop_path}
        alt={picture.alt}
      />
    </motion.div>
  );
}

export default ImgCard;
