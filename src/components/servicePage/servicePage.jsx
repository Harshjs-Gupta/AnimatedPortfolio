"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion, stagger } from "framer-motion";
import RollingInfo from "../rollingInfomation/rollingInfo";

function ServicePage() {
  const ref = useRef(null); // Reference for the element to observe
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Staggered animation for services
  const listAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const cardAnimation = {
    initial: { x: -200, opacity: 0 },
    animate: (index) => ({
      x: 0,
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
  };

  const services = [
    {
      id: "01",
      title: "Web Developer",
      description:
        "I'm, a passionate web developer specializing in creating dynamic and responsive websites and applications. With expertise in front-end technologies like HTML5, CSS3, JavaScript, and React.js and for Server send render I use Next.js",
    },
    {
      id: "02",
      title: "Web Designer",
      description:
        "I focus on building seamless user interfaces and experiences. I also have experience with back-end development and integrating APIs to create full-stack solutions",
    },
    {
      id: "03",
      title: "UI/UX Designer",
      description:
        "I'm a UI/UX designer passionate about crafting intuitive, user-centered digital experiences. I specialize in creating visually appealing, functional interfaces that enhance usability and meet user needs across various platforms.",
    },
    {
      id: "04",
      title: "3D Artist",
      description:
        "I'm a 3D artist using Blender specializes in creating stunning models, animations, renders and architecture. They utilize add-ons like Polygon for realistic textures and BlenderKit for assets.",
    },
  ];

  return (
    <main
      className="relative top-0 flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-10 px-10 py-10 sm:h-full sm:w-full sm:gap-10"
      id="service"
    >
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative top-5 text-4xl font-semibold text-mediumLight"
      >
        Our <span className="text-4xl font-bold text-light">Services</span>
      </motion.span>
      <RollingInfo autoplay={true} pauseOnHover={true} items={services} />
      {/* <motion.div
        ref={ref}
        variants={listAnimation}
        initial="initial"
        whileInView={isInView ? "animate" : "initial"}
        className="flex flex-col items-center justify-center gap-10 px-10 sm:grid sm:grid-cols-2"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index}
            variants={cardAnimation}
            className="flex h-auto w-96 flex-col items-start justify-center gap-3 sm:w-[450px]"
          >
            <span className="font-cursive text-3xl font-semibold text-mediumLight hover:text-mudGreen">
              {service.id}
            </span>
            <span className="font-cursive text-3xl font-semibold text-mediumLight hover:text-mudGreen">
              {service.title}
            </span>
            <p className="text-sm text-light">{service.description}</p>
          </motion.div>
        ))}
      </motion.div> */}
    </main>
  );
}

export default ServicePage;
