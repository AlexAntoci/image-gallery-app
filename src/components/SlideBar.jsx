function SlideBar() {
  function closeTheSlide() {
    let slide = document.querySelector(".slidebarArea");
    slide.style.display = "none";
  }

  return (
    <div className="slidebarArea">
      <div className="closeBTN" onClick={closeTheSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="x"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      </div>
      <div className="slideBarImg">
        <img className="image" src="#" alt="#" />
      </div>
    </div>
  );
}

export default SlideBar;
