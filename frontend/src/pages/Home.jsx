import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import CodingProfiles from '../components/CodingProfiles';
const Home = () => {
  useEffect(() => {
    document.title = "My Portfolio";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <CodingProfiles/>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;