import { NavBottom } from "./components/NavBottom";
import { NavTop } from "./components/NavTop";
import { About } from "./sections/About";
import { Home } from "./sections/Home";

export default function App() {
  return (
    <div className="overflow-hidden">
      {/* White Circle */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full">
          <div className="absolute h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-3xl"></div>
        </div>{" "}
      </div>

      {/* Start Logo */}

      <NavTop />
      <NavBottom />

      <main>
        {/* Sections */}
        <Home />
        <About />
      </main>
    </div>
  );
}
