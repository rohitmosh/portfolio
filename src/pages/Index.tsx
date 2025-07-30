import Header from '@/components/Portfolio/Header';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Skills from '@/components/Portfolio/Skills';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <div className="animated-bg">
        {/* More floating orbs for better coverage */}
        <div className="floating-orb" style={{left: '10%', top: '5vh', width: '150px', height: '150px', animationDelay: '0s'}}></div>
        <div className="floating-orb" style={{left: '80%', top: '15vh', width: '120px', height: '120px', animationDelay: '2s'}}></div>
        <div className="floating-orb" style={{left: '30%', top: '25vh', width: '180px', height: '180px', animationDelay: '4s'}}></div>
        <div className="floating-orb" style={{left: '70%', top: '35vh', width: '140px', height: '140px', animationDelay: '6s'}}></div>
        <div className="floating-orb" style={{left: '15%', top: '45vh', width: '160px', height: '160px', animationDelay: '8s'}}></div>
        <div className="floating-orb" style={{left: '85%', top: '55vh', width: '130px', height: '130px', animationDelay: '10s'}}></div>
        <div className="floating-orb" style={{left: '40%', top: '65vh', width: '170px', height: '170px', animationDelay: '12s'}}></div>
        <div className="floating-orb" style={{left: '60%', top: '75vh', width: '145px', height: '145px', animationDelay: '14s'}}></div>
        <div className="floating-orb" style={{left: '20%', top: '85vh', width: '155px', height: '155px', animationDelay: '1s'}}></div>
        <div className="floating-orb" style={{left: '75%', top: '95vh', width: '135px', height: '135px', animationDelay: '3s'}}></div>
        <div className="floating-orb" style={{left: '45%', top: '105vh', width: '165px', height: '165px', animationDelay: '5s'}}></div>
        <div className="floating-orb" style={{left: '25%', top: '115vh', width: '125px', height: '125px', animationDelay: '7s'}}></div>
        <div className="floating-orb" style={{left: '65%', top: '125vh', width: '175px', height: '175px', animationDelay: '9s'}}></div>
        <div className="floating-orb" style={{left: '35%', top: '135vh', width: '150px', height: '150px', animationDelay: '11s'}}></div>
        <div className="floating-orb" style={{left: '80%', top: '145vh', width: '140px', height: '140px', animationDelay: '13s'}}></div>

        {/* More pulsing orbs for better coverage */}
        <div className="pulsing-orb" style={{left: '50%', top: '10vh', width: '200px', height: '200px', animationDelay: '0s'}}></div>
        <div className="pulsing-orb" style={{left: '90%', top: '30vh', width: '180px', height: '180px', animationDelay: '2s'}}></div>
        <div className="pulsing-orb" style={{left: '5%', top: '50vh', width: '220px', height: '220px', animationDelay: '4s'}}></div>
        <div className="pulsing-orb" style={{left: '55%', top: '70vh', width: '190px', height: '190px', animationDelay: '6s'}}></div>
        <div className="pulsing-orb" style={{left: '10%', top: '90vh', width: '210px', height: '210px', animationDelay: '1s'}}></div>
        <div className="pulsing-orb" style={{left: '70%', top: '110vh', width: '170px', height: '170px', animationDelay: '3s'}}></div>
        <div className="pulsing-orb" style={{left: '30%', top: '130vh', width: '200px', height: '200px', animationDelay: '5s'}}></div>
        <div className="pulsing-orb" style={{left: '85%', top: '150vh', width: '185px', height: '185px', animationDelay: '7s'}}></div>
      </div>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
