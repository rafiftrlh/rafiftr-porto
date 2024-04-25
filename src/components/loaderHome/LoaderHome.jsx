import { motion } from "framer-motion";
import "./loaderHome.css";

export const LoaderHome = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: "-100%",
        transition: {
          duration: 1,
          delay: 2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="bg-gradient-to-b from-blk from-90% via-primary to-transparent fixed w-full"
      style={{ zIndex: 9999, height: "110vh" }}
    >
      <div className="containerLoaderHome">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          Halo
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          Hello
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          مرحباً بكم
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.3 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          Здравствуйте
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          こんにちは
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8 },
          }}
          className="loaderText"
        >
          안녕하세요.
        </motion.span>
      </div>
    </motion.div>
  );
};
