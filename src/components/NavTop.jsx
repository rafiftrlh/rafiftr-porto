export const NavTop = () => {
  return (
    <header
      className="fixed top-5 left-1/2 -translate-x-1/2 max-w-4xl w-full px-10 text-sm
        "
      style={{ zIndex: 999 }}
    >
      <div className="flex relative justify-end md:justify-between items-center">
        {/* Start Nav */}
        <nav className="hidden md:inline-block bg-blk px-8 py-4 rounded-full border border-primary">
          <ul className="flex items-center gap-5 h-full font-medium">
            <li>
              <a href="#" className="link-navbar text-nav">
                Home
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17V7"
                ></path>
              </svg>
            </li>
            <li>
              <a href="#" className="link-navbar text-nav">
                About
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17V7"
                ></path>
              </svg>
            </li>
            <li>
              <a href="#" className="link-navbar text-nav">
                Project
              </a>
            </li>
          </ul>
        </nav>
        {/* Ene Nav */}

        {/* Start Button to Page Contact */}
        <a
          href=""
          className="transition-all flex items-center gap-8 py-2 bg-blk border border-primary rounded-full pr-2 pl-4 group hover:bg-wht"
        >
          <div className="flex items-center gap-2">
            <svg
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 10a2 2 0 0 0-1.977 1.697l-.018.154L10 12l.005.15A2 2 0 1 0 12 10"></path>
            </svg>
            <span className="transition-all group-hover:text-blk text-nav">
              Hire Me.
            </span>
          </div>
          <div className="transition-all bg-wht text-blk font-semibold px-6 py-2 rounded-full group-hover:bg-blk group-hover:text-wht text-nav">
            Contact
          </div>
        </a>
        {/* End Button to Page Contact */}
      </div>
    </header>
  );
};
