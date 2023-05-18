function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigationIcon">Gallery</div>
      <button className="more">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="navBtn"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M112 304h288M112 208h288"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navigation;
