import Image from "next/image";
import download from "@/assets/icon/download.png";
import { motion } from "framer-motion";
function DownloadCVButton() {
  return (
    <motion.a
      href="/pdf/HarshGupta_Resume.pdf"
      download="HarshGupta_CV"
      className="download_btn flex w-full items-center justify-center gap-3"
    >
      Download CV
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
