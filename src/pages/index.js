import About from 'components/about/About';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Nav from 'components/nav/Nav';
import Projects from 'components/projects/Projects';
import React from 'react';
import { useRef } from "react";

export default function IndexPage() {
  const resultRef = useRef(null);
  return (
    <> 
        <Nav />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}
