import React from 'react';
import { FaCheck } from 'react-icons/fa'; 
import { Send } from 'lucide-react'; 
import profileImageLocal from '../assets/foto/profil.jpeg'; 

function AboutSection() {
  // Keahlianku
  const skills = [
    'UI/UX Design', 
    'Web Development', 
    'Branding', 
    'Motion Graphics',
    '3D Design'
  ];
  
  
  const buttonGradientClass = "bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600";
  const skillTagClass = "bg-purple-50 text-purple-600";

  return (
    <section id="about" className="py-20 md:py-24 bg-white scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Gambar Profil */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1"> 
          <img
            src={profileImageLocal} 
            alt="Profile"
            className="w-full max-w-sm h-80 object-cover rounded-2xl shadow-xl border-4 border-white transform hover:scale-[1.01] transition duration-300" 
          />
        </div>

        {/* Kontenku */}
        <div className="order-2 lg:order-2"> 
          <h2 className="text-4xl font-extrabold text-heading-dark mb-6 text-center lg:text-left">
            About Me
          </h2>
          <p className="text-text-gray text-lg mb-8 leading-relaxed text-center lg:text-left">
            Hi! I'm Chika, a passionate designer and frontend developer based in Indonesia. 
            With a background in visual design and a love for technology, 
            I specialize in creating beautiful, user-friendly digital experiences.
          </p>
          
          {/* Keahlian */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className={`
                  flex items-center space-x-2 
                  ${skillTagClass} 
                  text-sm font-medium 
                  px-4 py-2 
                  rounded-lg 
                  shadow-sm
                `}
              >
                <FaCheck className="text-purple-600 text-xs" /> 
                <span>{skill}</span>
              </span>
            ))}
          </div>

          {/* */}
          <div className="flex justify-center lg:justify-start">
            <a 
              href="#contact"
              className={`
                ${buttonGradientClass}
                w-full md:w-auto lg:w-full
                text-white px-8 py-3 
                rounded-xl font-semibold 
                shadow-lg shadow-pink-500/50 
                flex items-center justify-center gap-2
                transition duration-150 transform hover:scale-[1.02]
              `}
            >
              <Send className="w-5 h-5" /> 
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
