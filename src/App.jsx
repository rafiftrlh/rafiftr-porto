export default function App() {
  return (
    <div className="overflow-hidden">
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-3xl"></div>
        </div>{" "}
      </div>

      {/* Start Top Nav */}
      <header
        className="fixed top-5 w-full text-sm px-container
      "
      >
        <div className="flex relative justify-end md:justify-between items-center">
          {/* Start Nav */}
          <nav className="hidden md:inline-block bg-blk px-8 py-4 rounded-full border border-primary">
            <ul className="flex items-center gap-5 h-full font-medium">
              <li>
                <a href="#" className="link-navbar">
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
                <a href="#" className="link-navbar">
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
                <a href="#" className="link-navbar">
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
              <span className="transition-all group-hover:text-blk">
                Hire Me.
              </span>
            </div>
            <div className="transition-all bg-wht text-blk font-semibold px-6 py-2 rounded-full group-hover:bg-blk group-hover:text-wht">
              Contact
            </div>
          </a>
          {/* End Button to Page Contact */}
        </div>
      </header>
      {/* End Top Nav */}

      {/* Start Bottom Nav */}
      <nav className="fixed bottom-5 w-full md:hidden px-container">
        <ul className="flex bg-blk px-6 py-4 rounded-full border border-primary items-center justify-evenly w-full font-medium">
          <li>
            <a href="#" className="link-navbar">
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
            <a href="#" className="link-navbar">
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
            <a href="#" className="link-navbar">
              Project
            </a>
          </li>
        </ul>
      </nav>
      {/* End Bottom Nav */}
    </div>
  );
}
