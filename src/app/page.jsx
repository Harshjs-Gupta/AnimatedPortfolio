import SkillPage from "@/components/resumePage/resumePage";
import HomePage from "@/components/homePage/homePage";
import ServicePage from "@/components/servicePage/servicePage";
import Project from "@/components/projectPage/project";
import ContactPage from "@/components/contactPage/contactPage";

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
