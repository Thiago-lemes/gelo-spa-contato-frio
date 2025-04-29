
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
