"use client";

import dynamic from "next/dynamic";

const SkillPage = dynamic(() => import("@/components/resumePage/resumePage"));
const HomePage = dynamic(() => import("@/components/homePage/homePage"));
const ServicePage = dynamic(
  () => import("@/components/servicePage/servicePage"),
);
const Project = dynamic(() => import("@/components/projectPage/project"));
const ContactPage = dynamic(
  () => import("@/components/contactPage/contactPage"),
);

function Page() {
  return (
    <div className="flex flex-col items-center justify-center px-10">
      <HomePage />
      <SkillPage />
      <ServicePage />
      <Project />
      <ContactPage />
    </div>
  );
}

export default Page;
