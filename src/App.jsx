import { useEffect, useRef, useState } from "react";
import { NavBottom } from "./components/NavBottom";
import { NavTop } from "./components/NavTop";
import { LoaderHome } from "./components/loaderHome/LoaderHome";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { Home } from "./sections/Home";

export default function App() {
  const loaderSect = useRef();
  let [isAlreadyEntered, setIsAlreadyEntered] = useState(
    sessionStorage.getItem("isAlreadyEntered")
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await localStorage.getItem("isAlreadyEntered");
        setIsAlreadyEntered(data); // Mengatur state berdasarkan nilai dari sessionStorage
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("isAlreadyEntered", true);
    }, 2000);
  }, [loaderSect]);

  return (
    <div className="overflow-hidden">
      {isAlreadyEntered == "false" && (
        <div ref={loaderSect}>
          <LoaderHome />
        </div>
      )}
      <div className="">
        {/* White Circle */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <div className="absolute h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-3xl"></div>
          </div>{" "}
        </div>

        {/* Start Logo */}
        <NavTop />
        <NavBottom />

        <main>
          {/* Sections */}
          <Home />
          <About />
          <Footer />
        </main>
      </div>
    </div>
  );
}
