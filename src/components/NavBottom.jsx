export const NavBottom = () => {
  return (
    <nav
      className="fixed bottom-5 w-full md:hidden px-container"
      style={{ zIndex: 999 }}
    >
      <ul className="flex bg-blk px-6 py-4 rounded-full border border-primary items-center justify-evenly w-full font-medium">
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
  );
};
