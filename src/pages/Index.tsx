
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Extracurricular } from "@/components/Extracurricular";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Extracurricular />
      <Contact />
    </Layout>
  );
};

export default Index;
