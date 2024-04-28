import { Link } from "react-router-dom";
import { Footer } from "../sections/Footer";

export const ContactPage = () => {
  return (
    <>
      <section>
        <Link
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
          to="/"
          className="transition-all flex items-center gap-3 text-sm sm:text-base font-semibold hover:text-primary group w-fit"
        >
          <div className="transition-all border-[1.5px] p-1 rounded-full w-fit h-fit group-hover:border-primary">
            <svg
              className="transition-all stroke-wht group-hover:stroke-primary h-3 w-3 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="m14 7l-5 5m0 0l5 5"
              ></path>
            </svg>
          </div>
          Home
        </Link>
        <div className="flex flex-col mt-5 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Let&apos;s work together!
          </h1>
          <p className="text-base sm:text-lg font-medium">
            Please fill out this short form and I will contact you.
          </p>
          <form action="" className="mt-5 flex flex-col gap-5">
            <input type="text" placeholder="Name" className="input-contact" />
            <input
              type="text"
              placeholder="Email Address"
              className="input-contact"
            />
            <textarea
              placeholder="Type Your Message Here"
              className="textarea-contact"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button
              className="transition-all border-2 border-wht text-wht rounded-full py-4 font-semibold tracking-wider text-base hover:bg-wht hover:text-blk"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
