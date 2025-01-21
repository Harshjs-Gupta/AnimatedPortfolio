"use client"; // Ensure this runs on the client side
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "@/assets/logo/github.png";
import EzzyShop from "@/assets/images/ezzyshop.png";
import EzzyShop2 from "@/assets/images/ezzyshop2.png";
import EzzyShop3 from "@/assets/images/ezzyshop3.png";
import EzzyShop4 from "@/assets/images/ezzyshop4.png";
import EzzyShop5 from "@/assets/images/ezzyshop5.png";
import EzzyShop6 from "@/assets/images/ezzyshop6.png";
import EzzyShop7 from "@/assets/images/ezzyshop7.png";
import EzzyShopHome from "@/assets/images/EzzyShopHome.png";
import chattify from "@/assets/images/chattify.png";
import chattify2 from "@/assets/images/chattify2.png";
import vibeshift from "@/assets/images/vibeshift.png";
import vibeshift2 from "@/assets/images/vibeShift2.png";
import vibeshift3 from "@/assets/images/vibeShift3.png";
import vibeshift4 from "@/assets/images/vibeShift4.png";
import rightArrow from "@/assets/icon/rightArrow.png";
import leftArrow from "@/assets/icon/leftArrow.png";
import { motion } from "framer-motion";

// Register gsap plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    image: [
      EzzyShopHome,
      EzzyShop,
      EzzyShop2,
      EzzyShop3,
      EzzyShop4,
      EzzyShop5,
      EzzyShop6,
      EzzyShop7,
    ],
    title: "EzzyShop Shopping site",
    description:
      "In this website you can search any products, view details of any products, and feature like add to cart, dummy payment system authentication and more.",
    technologies:
      "Next.js, CSS3, TypeScript, TailwindCSS, SCSS, Firebase, FireStore",
    github: "https://github.com/Harshjs-Gupta/EzzyShop",
    url: "https://ezzy-shop-eight.vercel.app/",
  },
  {
    id: 2,
    image: [chattify, chattify2],
    title: "Chattify chatting site",
    description:
      "In this website you chat with your friends, send emojis, messages, and share images. You can also log out and block users.",
    technologies: "HTML5, CSS3, React, TypeScript, TailwindCSS, SCSS",
    github: "https://github.com/Harshjs-Gupta/Chattify2",
    url: "https://chattify2.vercel.app/",
  },
  {
    id: 3,
    image: [vibeshift, vibeshift2, vibeshift3, vibeshift4],
    title: "VibeShift",
    description:
      "So this website reads your mood and shows you UI on Screen based on mood and also plays some music based on your mood.",
    technologies: "Next.js, CSS3, TailwindCSS, Face.js",
    github: "https://github.com/Harshjs-Gupta/VibeShift",
    url: "https://vibe-shift.vercel.app/",
  },
];

function Project() {
  const [currentImages, setCurrentImages] = useState(
    projects.map(() => 0), // Initialize image index for each project
  );

  const handleNextImage = (index) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % projects[index].image.length : imgIndex,
      ),
    );
  };

  const handlePrevImage = (index) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) =>
        i === index
          ? (imgIndex - 1 + projects[index].image.length) %
            projects[index].image.length
          : imgIndex,
      ),
    );
  };

  useEffect(() => {
    // Ensure we run this only in the client-side (browser) environment
    if (typeof window !== "undefined") {
      const projectItems = document.querySelectorAll(".project-item");

      projectItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -200 : 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 30%",
              scrub: 3,
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
      gsap.fromTo(
        ".title",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".title",
            start: "top 80%",
            end: "top 30%",
            scrub: 2,
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }
  }, []); // Ensure this effect runs once, only on client side

  return (
    <section
      className="projectContainer relative top-10 flex flex-col items-center justify-center gap-5 px-5 sm:h-auto sm:w-screen sm:gap-10"
      id="project"
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 1 }}
        className="title text-4xl font-semibold text-mediumLight"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-item flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10`}
          >
            <div className="relative border-[#cad2c5] object-cover">
              <button
                onClick={() => handlePrevImage(index)}
                className="absolute left-0 top-1/2 ml-2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white/50"
              >
                <Image src={leftArrow} alt="left arrow" className="h-10 w-10" />
              </button>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image[currentImages[index]]}
                  alt={`${project.title} image`}
                  className="projectImage"
                />
              </a>
              <button
                onClick={() => handleNextImage(index)}
                className="absolute right-0 top-1/2 mr-2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white/50"
              >
                <Image
                  src={rightArrow}
                  alt="right arrow"
                  className="h-10 w-10"
                />
              </button>
            </div>
            <div className="flex w-96 flex-col gap-5 sm:w-[400px]">
              <div className="flex flex-col gap-5 border-b border-[#cad2c5] p-2">
                <span className="font-cursive text-3xl font-semibold text-mediumLight">{`0${project.id}`}</span>
                <span className="text-2xl font-semibold text-mediumLight">
                  {project.title}
                </span>
                <p className="text-sm text-light">{project.description}</p>
                <span className="text-sm font-semibold text-mediumLight">
                  {project.technologies}
                </span>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={github} alt="github" className="h-10 w-10" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
