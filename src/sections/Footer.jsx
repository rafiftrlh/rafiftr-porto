import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-blk">
      <section className="flex flex-col sm:flex-row justify-between gap-10">
        <div className="w-full">
          <p className="font-semibold text-2xl">
            Let&apos;s create <br /> something <br /> great
          </p>
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
          </ul>
        </div>
        <div className="w-full flex flex-col justify-between items-end gap-y-5 ">
          <ul className="flex items-center gap-5 font-medium justify-end">
            <li>
              <a href="#" className="link-navbar text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link-navbar text-base">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link-navbar text-base">
                Project
              </a>
            </li>
          </ul>
          <p className="text-sm opacity-60 border-l pl-3 transition-all hover:border-l-4">
            Copyright ©2024 Rafi Fitrotulloh. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};
