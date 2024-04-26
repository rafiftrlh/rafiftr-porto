import { useRef } from "react";
import { NavBottom } from "./components/NavBottom";
import { NavTop } from "./components/NavTop";
import { LoaderHome } from "./components/loaderHome/LoaderHome";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { Home } from "./sections/Home";

export default function App() {
  const home = useRef();
  const about = useRef();
  const footer = useRef();

  return (
    <div className="overflow-hidden">
      <LoaderHome />

      <div className="">
        {/* White Circle */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <div className="absolute h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-3xl"></div>
          </div>{" "}
        </div>

        {/* Start Logo */}

        <NavTop home={home} about={about} footer={footer} />
        <NavBottom home={home} about={about} footer={footer} />

        <main>
          {/* Sections */}
          <div ref={home}>
            <Home />
          </div>
          <div ref={about}>
            <About />
          </div>
          <div ref={footer}>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
