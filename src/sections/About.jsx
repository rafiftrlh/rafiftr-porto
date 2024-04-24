import { FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const About = () => {
  return (
    <div className="relative">
      <div className="flex overflow-hidden space-x-10 w-screen border-y border-primary opacity-30 absolute top-1/2 rotate-6">
        <div className="flex whitespace-nowrap py-2 space-x-10 animate-loop-scrol">
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
        </div>
        <div
          aria-hidden="true"
          className="flex whitespace-nowrap py-2 space-x-10 animate-loop-scrol"
        >
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
          <span className="text-4xl text-primary font-bold">ABOUT ME </span>
        </div>
      </div>
      <section className="">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          <u>About Me</u>
        </h1>
        <div className="mt-10 flex flex-col gap-8 transition-all">
          <div className="card">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
              I am Rafi Fitrotulloh. I am a Frontend and Backend Web Developer.
            </h3>
            <p className="mt-3 text-base sm:text-lg">
              I am a student attending Taruna Bhakti Vocational High School in
              Depok. As a software developer, I am very interested in this field
              and continue to explore and keep up with the times. My interest is
              not only on the web, I am also interested in learning mobile and
              desktop development.
            </p>
            <q className="mt-5 inline-block w-full text-end font-semibold text-base">
              <i>YOLO, so make the most of it.</i>
            </q>
            <ul className="flex w-full flex-wrap gap-3 mt-5">
              <li>
                <a href="https://www.instagram.com/rafi.ftrlh/">
                  <FaInstagram className="text-2xl transition-all hover:fill-primary" />
                </a>
              </li>
              <li>
                <a href="https://github.com/rafiftrlh">
                  <AiFillGithub className="text-2xl transition-all hover:fill-primary" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillLinkedin className="text-2xl transition-all hover:fill-primary" />
                </a>
              </li>
              <li className="border-l-2 pl-2 text-base hover:text-primary transition-all">
                <a href="mailto:rafifitro89@email.com">rafifitro89@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
              <u>Skills</u>
            </h3>
            <ul className="mt-5 flex gap-5 flex-wrap justify-start">
              <li className="li-icon">
                <a href="https://html.com/">
                  <img src="/public/icons/icon-html.svg" alt="html" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <img src="/public/icons/icon-css.svg" alt="css" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://sass-lang.com/documentation/syntax/">
                  <img src="/public/icons/icon-scss.svg" alt="scss" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://tailwindcss.com/">
                  <img
                    src="/public/icons/icon-tailwindcss.svg"
                    alt="tailwindcss"
                  />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                  <img
                    src="/public/icons/icon-javascript.svg"
                    alt="javascript"
                  />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://react.dev/">
                  <img src="/public/icons/icon-react.svg" alt="react js" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://nodejs.org">
                  <img src="/public/icons/icon-nodejs.svg" alt="node js" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://expressjs.com/">
                  <img
                    src="/public/icons/icon-expressjs.svg"
                    alt="express js"
                  />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://www.mysql.com/">
                  <img src="/public/icons/icon-mysql.svg" alt="mysql" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://www.mongodb.com/">
                  <img src="/public/icons/icon-mongodb.svg" alt="mongodb" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://www.figma.com">
                  <img src="/public/icons/icon-figma.svg" alt="figma" />
                </a>
              </li>
              <li className="li-icon">
                <a href="https://git-scm.com/">
                  <img src="/public/icons/icon-git.svg" alt="git" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
