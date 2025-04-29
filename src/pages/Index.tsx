
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Areas />
      <Services />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
