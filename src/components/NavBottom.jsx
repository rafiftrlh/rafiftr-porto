import { useEffect, useState } from "react";

export const NavBottom = () => {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  // const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      console.log(scrollTop);

      const aboutSection = document.getElementById("aboutSect");
      // const projectSection = document.getElementById("projectSect");

      const aboutSectionTop = aboutSection.offsetTop;
      // const projectSectionTop = projectSection.offsetTop;

      setIsHome(scrollTop < aboutSectionTop);
      setIsAbout(scrollTop >= aboutSectionTop);
      // setIsProject(scrollTop >= projectSectionTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed bottom-5 w-full md:hidden px-container"
      style={{ zIndex: 999 }}
    >
      <ul className="flex bg-blk px-6 py-4 rounded-full border border-primary items-center justify-evenly w-full font-medium">
        <li>
          <a
            href="#homeSect"
            className={`${
              isHome ? "link-navbar-active" : "link-navbar"
            } text-nav`}
          >
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
          <a
            href="#aboutSect"
            className={`${
              isAbout ? "link-navbar-active" : "link-navbar"
            } text-nav`}
          >
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
