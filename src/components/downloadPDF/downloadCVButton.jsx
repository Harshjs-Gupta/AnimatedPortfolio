import Image from "next/image";
import download from "@/assets/icon/download.png";
import { motion } from "framer-motion";
import ShinyText from "../shineText/shineText";
function DownloadCVButton() {
  return (
    <motion.a
      href="/pdf/HarshGupta_Resume.pdf"
      download="HarshGupta_CV"
      className="download_btn flex w-full items-center justify-center gap-3"
    >
      <ShinyText
        text="Download CV"
        disabled={false}
        speed={3}
        className="custom-class"
      />

      <Image
        src={download}
        height={30}
        width={30}
        alt="downloadIcon"
        className="h-5 w-5"
      />
    </motion.a>
  );
}
export default DownloadCVButton;
