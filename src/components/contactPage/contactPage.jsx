"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import call from "@/assets/icon/call.png";
import mail from "@/assets/icon/mail.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

function ContactPage() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      const autoReplyData = {
        user_name: form.current.name.value,
        to_email: form.current.email.value,
      };

      // Send original email
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      console.log("Original message sent successfully:", result);

      // Send auto-reply email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_AUTO_EMAILJS_TEMPLATE_ID,
        autoReplyData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      console.log("Auto-reply sent successfully!");
      toast.success("Message and auto-reply sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send the message. Please try again later.");
    } finally {
      form.current.reset();
    }
  };
  return (
    <>
      <section
        className="relative top-20 flex h-[100dvh] w-[100vw] flex-col items-center justify-center gap-4 sm:h-screen sm:w-full"
        id="contact"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-bold text-light"
        >
          <span className="text-mediumLight">Contact</span> Us
        </motion.h1>
        <div className="flex items-center justify-center gap-20">
          <motion.div
            initial={{ scale: 0, x: -100 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex h-auto w-[400px] flex-col items-start justify-center gap-5 rounded-md bg-[#354F52] p-4"
          >
            <span className="text-2xl font-semibold text-mediumLight">
              Let's work together
            </span>
            <form
              className="flex w-full flex-col gap-4"
              onSubmit={sendEmail}
              ref={form}
            >
              <TextField
                label="Your name"
                variant="outlined"
                className="my-2 w-full"
                size="small"
                name="name"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#CAD2C5" }, // Normal border color
                    "&:hover fieldset": { borderColor: "#CAD2C5" }, // Hover border color
                    "&.Mui-focused fieldset": { borderColor: "#CAD2C5" }, // Focused border color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#CAD2C5", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CAD2C5", // Focused label color
                  },
                }}
              />
              <TextField
                label="Your Mob. number"
                variant="outlined"
                className="my-2 w-full"
                size="small"
                name="number"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#CAD2C5" }, // Normal border color
                    "&:hover fieldset": { borderColor: "#CAD2C5" }, // Hover border color
                    "&.Mui-focused fieldset": { borderColor: "#CAD2C5" }, // Focused border color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#CAD2C5", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CAD2C5", // Focused label color
                  },
                }}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                className="my-2 w-full"
                name="email"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#CAD2C5" }, // Normal border color
                    "&:hover fieldset": { borderColor: "#CAD2C5" }, // Hover border color
                    "&.Mui-focused fieldset": { borderColor: "#CAD2C5" }, // Focused border color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#CAD2C5", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CAD2C5", // Focused label color
                  },
                }}
              />
              <FormControl
                fullWidth
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#CAD2C5" }, // Normal border color
                    "&:hover fieldset": { borderColor: "#CAD2C5" }, // Hover border color
                    "&.Mui-focused fieldset": { borderColor: "#CAD2C5" }, // Focused border color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#CAD2C5", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CAD2C5", // Focused label color
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  Select a service
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select a service"
                  size="small"
                  name="service"
                >
                  <MenuItem value={10}>Web Development</MenuItem>
                  <MenuItem value={20}>UI/Ux Designer</MenuItem>
                  <MenuItem value={30}>FrontEnd Developer</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                name="message"
                rows={4}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#CAD2C5" }, // Normal border color
                    "&:hover fieldset": { borderColor: "#CAD2C5" }, // Hover border color
                    "&.Mui-focused fieldset": { borderColor: "#CAD2C5" }, // Focused border color
                  },
                  "& .MuiInputLabel-root": {
                    color: "#CAD2C5", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#CAD2C5", // Focused label color
                  },
                }}
              />
              <Button
                variant="outlined"
                size="small"
                type="submit"
                sx={{
                  width: "50px",
                  color: "#CAD2C5",
                  borderColor: "#CAD2C5",
                  fontWeight: "bold",
                }}
              >
                Send
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ scale: 0, x: 100 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="ml-4 flex flex-col items-start justify-center gap-4"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#354F52]">
                <Image src={call} alt="PhoneLogo" className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <pre className="text-md text-mediumLight">Phone</pre>
                <span className="text-sm">(+91) 7667045966</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#354F52]">
                <Image src={mail} alt="mailLogo" className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <pre className="text-md text-mediumLight">Email</pre>
                <span className="text-sm">harshgupta88911@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default ContactPage;
