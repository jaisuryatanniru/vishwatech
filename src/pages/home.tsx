import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import './home.css';
import { Button } from "@/components/ui/button";
import { Rocket, Users, MessageSquare, Briefcase, Bone as Drone, Cpu, Sparkles, MessageCircle } from "lucide-react";
import Countdown from "./countdown";

const rocket = "/rocket.png";
const bulb = "/bulb.jpg";
const shark = "/shark.jpg";
const logo = "/logo.jpg";
const header = "/header.png";
const man = "/man.jpg";
const drone = "/drone.jpg";
const soap = "/soap.jpg";
const nvidia = "/nvidia.jpg";
const sky = "/sky.jpg";
const special = "/special.png";

function Mainpage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll animation for shark
  const sharkY = useTransform(scrollY, [0, 800], [0, 400]);
  const smoothSharkY = useSpring(sharkY, {
    stiffness: 40,
    damping: 60,
    restDelta: 0.001
  });

 

  // Floating animation for elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Hexagon hover animation
  const hexagonHover = {
    scale: 1.1, // Increase size by 10%
     // Optional: Add a slight rotation
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Vishvatech Logo" className="h-8 w-auto md:h-12" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button className="text-[#103B8C] focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#103B8C] hover:text-blue-700 font-bold">Home</a>
            <a href="https://open.spotify.com/episode/16xQdRf3oi299XUmFtREDB?si=OF7p_1egS_GR6qGrNkPIvA" className="text-[#103B8C] hover:text-blue-700 font-bold">Podcast</a>
            <a href="https://vishva.co" className="text-[#103B8C] hover:text-blue-700 font-bold">About</a>
            <a href="/contact" className="text-[#103B8C] hover:text-blue-700 font-bold">Contact Us</a>
            <a href="#Team" className="text-[#103B8C] hover:text-blue-700 font-bold">Team</a>
            <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#103B8C] hover:bg-blue-700 px-4 py-2">Register</Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#home" className="text-[#103B8C] hover:text-blue-700 font-bold">Home</a>
              <a href="https://open.spotify.com/episode/16xQdRf3oi299XUmFtREDB?si=OF7p_1egS_GR6qGrNkPIvA" className="text-[#103B8C] hover:text-blue-700 font-bold">Podcast</a>
              <a href="https://vishva.co" className="text-[#103B8C] hover:text-blue-700 font-bold">About</a>
              <a href="/contact" className="text-[#103B8C] hover:text-blue-700 font-bold">Contact Us</a>
              <a href="#Team" className="text-[#103B8C] hover:text-blue-700 font-bold">Team</a>
              <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#103B8C] hover:bg-blue-700 px-4 py-2">Register</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-24 flex items-center">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
            >
              Innovate, Build, and
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Scale with
              </motion.h1>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[#103B8C] -mb-6"
              >
                Vishvatech 3.0!
              </motion.div>
            </motion.h1>

            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-600 text-2xl m-2"
            >
              Creating opportunities, fostering innovation, driving success.
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#103B8C] hover:bg-blue-700 px-5 py-2 mb-12 p-6">Register</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Rocket */}
        <motion.img
          src={rocket}
          alt="rocket"
          className="absolute left-4 bottom-20 md:bottom-7 h-16 w-16 md:h-40 md:w-40 text-blue-600"
          style={{ transform: "rotate(-45deg)", transformOrigin: "center" }}
          animate={floatingAnimation}
          whileHover={{ scale: 1.2, rotate: -35 }}
        />

        {/* Animated Bulb */}
        <motion.img
          src={bulb}
          alt="bulb"
          className="absolute right-4 bottom-20 md:bottom-7 h-16 w-16 md:h-40 md:w-40 text-blue-600"
          animate={floatingAnimation}
          whileHover={{ scale: 1.2, rotate: 10 }}
        />
      </section>

      {/* Sharktank Section */}
      <section id="sharktank" className="py-24 relative -mt-40">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.img
  src={header}
  alt="header"
  className="w-100 h-100  md:h-80   mt-4 mb-4 mx-auto" // Responsive sizing
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
/>
          {/* Animated Shark with scroll tracking */}
          <motion.img
            src={shark}
            alt="shark"
            className="absolute left-0 top-1/2 mt-12 mb-8 -ml-8 sm:top-1/3 transform -translate-y-1/2 h-24 w-24 sm:h-40 sm:w-40 md:h-52 md:w-52"
            style={{ y: smoothSharkY }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* Hexagon Grid */}
          <div className="flex justify-center items-center -ml-20">
            <div className="relative h-[400px] w-[250px] md:h-[400px] md:w-[400px]">
              <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
                {/* Hexagon Items */}
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-1 row-start-1"
                  whileHover={hexagonHover}
                >
                  <Briefcase className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">5+ top</div>
                  <div className="text-xs">investors</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-3 row-start-1 "
                  whileHover={hexagonHover}
                >
                  <MessageSquare className="h-4 w-4 md:h-8 md:w-8 mb-2" />
                  <div className="text-sm md:text-md font-semibold">3 panel</div>
                  <div className="text-xs">discussions</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-2 row-start-2"
                  whileHover={hexagonHover}
                >
                  <Users className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">15 startup</div>
                  <div className="text-xs">founders</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-1 row-start-3"
                  whileHover={hexagonHover}
                >
                  <Users className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">500+</div>
                  <div className="text-xs">students</div>
                </motion.div>
                <motion.div
                  className="hexagon bg-[#103B8C] text-white flex flex-col justify-center items-center col-start-3 row-start-3"
                  whileHover={hexagonHover}
                >
                  <Briefcase className="h-6 w-6 md:h-9 md:w-9 mb-2" />
                  <div className="text-sm md:text-md font-semibold">10+</div>
                  <div className="text-xs">corporate</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="text-center mt-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider">COUNTDOWN</h2>
            <Countdown />
          </div>
        </div>

        <motion.img
          src={rocket}
          alt="rocket"
          className="absolute right-4 top-1/2 mt-16 mb-12 h-16 w-16 md:h-44 md:w-44 sm-bottom-1/3 text-[#103B8C]"
          style={{ 
            transform: "rotate(-45deg)", 
            transformOrigin: "center",
           
          }}
          animate={floatingAnimation}
          whileHover={{ scale: 1.2, rotate: -35 }}
        />
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Entrepreneurship Master Class */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex items-center justify-center">
              <img
                src={man}
                alt="Entrepreneurship"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#103B8C]">Entrepreneurship Master Class: Build, Scale, Succeed!</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn business strategies & startup essentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Gain insights from industry experts & mentors</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#103B8C]" />
                  <span>Master pitching, funding & leadership skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#103B8C]" />
                  <span>Turn your ideas into successful ventures</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Drone Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-[#103B8C]">Drone Workshop: Take Flight into the Future!</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Drone className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn drone technology & engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Hands-on flying & assembly sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore real-world drone applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#103B8C]" />
                  <span>Gain expert insights</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center order-1 md:order-2">
              <img
                src={drone}
                alt="Drone Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
          </div>

          {/* NVIDIA Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex items-center justify-center">
              <img
                src={nvidia}
                alt="NVIDIA Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#103B8C]">NVIDIA Workshop: Powering the Future of AI & Graphics!</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore cutting-edge AI & GPU advancements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Hands-on deep learning & gaming sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn from industry experts & innovators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#103B8C]" />
                  <span>Unlock career & research opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Soap Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-[#103B8C]">Soap Workshop: Craft Your Own Creations!</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Drone className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn the art of soap-making</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Hands-on custom soap crafting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore natural ingredients & techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#103B8C]" />
                  <span>Take home your handmade soaps</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center order-1 md:order-2">
              <img
                src={soap}
                alt="Soap Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
          </div>

          {/* Futurepreneur Workshop */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="flex items-center justify-center">
              <img
                src={sky}
                alt="Futurepreneur Workshop"
                className="rounded-lg h-48 md:h-80"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#103B8C]">Futurepreneur: Innovate, Lead, Succeed!</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#103B8C]" />
                  <span>Ignite your entrepreneurial mindset</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#103B8C]" />
                  <span>Learn from startup leaders & investors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#103B8C]" />
                  <span>Explore funding, networking & growth strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#103B8C]" />
                  <span>Turn ideas into successful ventures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-16 bg-white text-white -mt-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <img src={special} alt="special" className="h-100 ml-8" />
            <h2 className="text-3xl md:text-4xl text-black m-8">Secure your spot at Vishvatech 3.0 now!</h2>
            <a href="https://form.jotform.com/250510451796052" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#103B8C] hover:bg-blue-700 px-5 py-2">Register</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Get In Touch & Newsletter Section */}
      <div className="flex flex-col items-center justify-center bg-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-900 text-white px-6 py-10 rounded-lg w-full">
          {/* Get In Touch Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h2 className="text-2xl font-bold mt-10">Get In Touch:</h2>
            <p className="text-lg mt-2 max-w-xl">
              "Have questions or want to connect? Reach out to us and be part of Vishvatech 3.0!" 🚀✨
            </p>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right px-6 py-10 w-full">
            <h2 className="text-2xl font-bold">OUR NEWSLETTER</h2>
            <p className="text-sm mt-2 max-w-xl">
              Don't miss to subscribe to our new feeds. Kindly fill the form below!
            </p>
            <div className="mt-4 flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your Email..."
                className="flex-1 p-3 rounded-l-lg text-gray-700 focus:outline-none"
              />
              <br />
              <Button className="bg-[#103B8C] hover:bg-blue-700 px-5 py-2 rounded-r-lg mr-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;