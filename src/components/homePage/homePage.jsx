"use client";
import twitter from "@/assets/logo/twitter.png";
import linkedin from "@/assets/logo/linkedin.png";
import github from "@/assets/logo/github.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { center } from "../navbar/navbar";
import DownloadCVButton from "../downloadPDF/downloadCVButton";
import SplitText from "@/components/splitText/splitText";

function HomePage() {
  return (
    <section
      className="relative top-8 flex h-[100vh] w-[100vw] flex-col-reverse gap-5 border-b border-[#CAD2C5] px-5 py-5 sm:h-screen sm:w-full sm:flex-row sm:gap-10"
      id="home"
    >
      <div className="flex flex-col items-start justify-center gap-5 sm:gap-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start justify-center gap-6"
        >
          <span className="text-xl font-semibold text-light">
            Hello It's me
          </span>
          <motion.span className="text-3xl font-semibold text-mediumLight">
            Harsh Gupta
          </motion.span>
          <span className="text-xl font-semibold text-light">
            And I'm a <span className="text-mediumLight">Web Developer</span>
          </span>
        </motion.div>
        <marquee
          behavior="scroll"
          direction="left"
          className="absolute top-[25%] -z-10 w-screen"
        >
          <div className="marqueeFont w-screen text-[120px] font-[900]">
            Frontend Developer
          </div>
        </marquee>
        <motion.div
          initial={{ y: 200, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start gap-5"
        >
          {/* <p className="w-96 text-sm text-light sm:w-[650px] sm:text-lg">
            Frontend developer, interested in building high-performance,
            eye-catching, responsive, and interactive user interfaces for web
            apps/websites. currently in 3rd yr of BCA, looking for full-time
            opportunity in the domain of frontend development.
          </p> */}
          <SplitText
            text="Frontend developer, interested in building high-performance,eye-catching, responsive, and interactive user interfaces for web apps/websites. Currently in 3rd yr of BCA,looking for full-time opportunity in the domain of frontend development."
            className="text-center text-lg font-medium leading-relaxed sm:text-2xl"
            delay={80}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className={`gap-5 ${center}`}>
            <motion.a
              href="https://www.linkedin.com/in/harsh-gupta-b56a63265/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={linkedin} alt="linkedin" className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://github.com/Harshjs-Gupta"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={github} alt="github" className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://x.com/harshgupta_js"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={twitter} alt="twitter" className="h-10 w-10" />
            </motion.a>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`h-5 rounded-full border border-[#CAD2C5] p-5 text-sm hover:bg-[#84a98c48] sm:h-10 ${center}`}
          >
            <DownloadCVButton />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 300, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-10 top-0 flex h-96 w-96 items-center justify-center px-10 sm:right-0 sm:top-10"
      >
        {/* <model-viewer
          src="/models/frameImg.glb"
          alt="A 3D model of a laptop"
          camera-controls
          auto-rotate
          className="absolute right-0 top-0 flex h-96 w-96 items-center justify-center px-10 sm:right-0 sm:top-10"
        ></model-viewer> */}
      </motion.div>
    </section>
  );
}
export default HomePage;
