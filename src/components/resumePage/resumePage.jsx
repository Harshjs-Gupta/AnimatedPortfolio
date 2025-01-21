"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import DownloadCVButton from "../downloadPDF/downloadCVButton";
import { useInView } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

function ResumePage() {
  const [activeSection, setActiveSection] = useState("education");
  const ref = useRef(null); // Reference for the element to observe
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    // Dynamically import model-viewer only in the client-side
    if (typeof window !== "undefined") {
      import("@google/model-viewer");
    }
  }, []);

  return (
    <section className="section" id="resume">
      <div className="aboutme-container">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="hire-container"
        >
          <span>Why hire me?</span>
          <p>
            For hire me first see my ability like Education, Skill, About Me
          </p>
          <div className="buttons">
            <motion.button
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`education ${
                activeSection === "education" ? "active" : ""
              }`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </motion.button>
            <motion.button
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`skill ${activeSection === "skill" ? "active" : ""}`}
              onClick={() => setActiveSection("skill")}
            >
              Skill
            </motion.button>
            <motion.button
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`aboutMe ${activeSection === "about" ? "active" : ""}`}
              onClick={() => setActiveSection("about")}
            >
              About Me
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="downloadCV"
            >
              <DownloadCVButton />
            </motion.div>
          </div>
        </motion.div>

        <div className="about">
          {activeSection === "education" && (
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 2, type: "spring" }}
              style={{
                rotateX: hovered ? rotateX : 0,
                rotateY: hovered ? rotateY : 0,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="education-container px-5 sm:px-0"
            >
              <span className="title">My Education</span>
              <pre className="description">
                Here&apos;s my Education Qualification
              </pre>
              {/* Education content */}
              <div className="courses-container">
                <div className="course">
                  <div className="year-container">
                    <div className="year">2022 - 2025</div>
                    <pre className="courseName text-sm">
                      Bachelor of Computer Application
                    </pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">Online course</div>
                  </div>
                </div>
                <div className="course">
                  <div className="year-container">
                    <div className="year">2022 - 2024</div>
                    <pre className="courseName">Programming Course</pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">Online Udemy</div>
                  </div>
                </div>
                <div className="course">
                  <div className="year-container">
                    <div className="year">2024</div>
                    <pre className="courseName">Frontend Development</pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">Online Udemy</div>
                  </div>
                </div>
                <div className="course">
                  <div className="year-container">
                    <div className="year">2022</div>
                    <pre className="courseName">
                      12<sup>th</sup> DAV Public{" "}
                    </pre>
                  </div>
                  <div className="course-method">
                    <div className="dot">&#x2022;</div>
                    <div className="method">From CBSE</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "skill" && (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="skill-container relative flex h-[400px] w-[500px] flex-col items-start justify-center p-10 px-5"
              id="skill"
            >
              <h1 className="text-xl font-semibold text-mudGreen sm:text-4xl">
                Skills In 3D Model
              </h1>
              {/* Dynamically imported model-viewer */}
              <model-viewer
                src="/models/laptop.glb"
                alt="A 3D model of a laptop"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                className="relative flex h-[400px] w-[500px] items-center justify-center px-10"
              />
            </motion.div>
          )}

          {activeSection === "about" && (
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{ duration: 1, type: "spring" }}
              style={{
                rotateX: hovered ? rotateX : 0,
                rotateY: hovered ? rotateY : 0,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="about-container"
            >
              <span className="title">About Me</span>
              <div className="description">
                Here is my Skills that I have use for develop Websites and
                Webapp and UI/UX of Webpage.
              </div>
              {/* About Me content */}
              <div className="detail-container">
                <div className="detail">
                  <span className="detail-name">Name</span>
                  <span>Harsh Gupta</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Phone</span>
                  <span>(+91) 7667045966</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Experience</span>
                  <span>Fresher</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Email</span>
                  <span>harshgupta88911@gmail.com</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Freelance</span>
                  <span>Available</span>
                </div>
                <div className="detail">
                  <span className="detail-name">Language</span>
                  <span>English, Hindi</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ResumePage;
