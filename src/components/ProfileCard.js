import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

function ProfileCard() {
    
  const myPhoneNumber = "6283842729943"; 
  const defaultMessage = "Halo, saya tertarik menghubungi Qiyu setelah melihat profil Anda.";
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  
  
  const waLink = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;
  
 
    
  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      
      {/*  */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end -z-10"
      ></div>
      
      {/*  */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"> 
        
        {/*  */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-xl text-primary-purple font-semibold mb-2">Hello, I'm Qiyu</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading-dark leading-tight mb-4">
            <ReactTyped
              strings={["Creative Designer", "Frontend Developer"]} 
              typeSpeed={50} 
              backSpeed={30} 
              loop 
              className="text-heading-dark" 
            />
            <br className="hidden lg:inline"/>
          </h1>
          <p className="text-lg text-text-gray mb-8">
            Hi, I'm Chika (artistically known as Qiyu). Passionate in creating beautiful and functional digital products. I combine design with technology to craft impactful solutions for users and brands.
          </p>
          
          {/*  */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            
            {/*  */}
            <button className="bg-gradient-to-r from-gradient-start-btn to-gradient-end-btn text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition duration-150">
              See My Work
            </button>
            
            {/*  */}
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-primary-purple text-primary-purple px-6 py-3 rounded-xl font-medium hover:bg-primary-purple hover:text-white transition duration-150">
              
                Contact Me
                
            </a>
            
          </div>
          
          {/* Ikon Media Sosial */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-text-gray">
            <a href="https://www.instagram.com/d_ianchika/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-purple transition"><FaInstagram /></a>
            <a href="https://github.com/Chika-Dian" target="_blank" rel="noopener noreferrer" className="hover:text-primary-purple transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/chika-dian-nurcahyani" target="_blank" rel="noopener noreferrer" className="hover:text-primary-purple transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default ProfileCard;