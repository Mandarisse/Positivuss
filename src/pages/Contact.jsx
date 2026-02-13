import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CompanyLogos from "../components/CompanyLogos";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import WorkingProcess from "../components/WorkingProcess";
import ContactUs from "../components/ContactUs";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <ContactUs />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Contact;