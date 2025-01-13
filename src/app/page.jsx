import dynamic from "next/dynamic";

const SkillPage = dynamic(() => import("@/components/resumePage/resumePage"), {
  ssr: false,
});
const HomePage = dynamic(() => import("@/components/homePage/homePage"), {
  ssr: false,
});
const ServicePage = dynamic(
  () => import("@/components/servicePage/servicePage"),
  { ssr: false },
);
const Project = dynamic(() => import("@/components/projectPage/project"), {
  ssr: false,
});
const ContactPage = dynamic(
  () => import("@/components/contactPage/contactPage"),
  { ssr: false },
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
