import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-heading-dark py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-gray-400">
        
        {/**/}
        <div className="font-bold text-3xl text-white mb-6">MyProfile</div>

        {/* */}
        <nav className="flex justify-center space-x-6 mb-8 text-lg font-medium">
          <a href="#home" className="hover:text-primary-purple transition">Home</a>
          <a href="#about" className="hover:text-primary-purple transition">About</a>
          <a href="#skills" className="hover:text-primary-purple transition">Skills</a>
          <a href="#portfolio" className="hover:text-primary-purple transition">Portfolio</a>
          <a href="#contact" className="hover:text-primary-purple transition">Contact</a>
        </nav>

        {/* Ikon */}
        <div className="flex justify-center space-x-6 text-2xl mb-8">
            <a href="#" className="text-gray-400 hover:text-primary-purple transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-primary-purple transition"><FaGithub /></a>
            <a href="#" className="text-gray-400 hover:text-primary-purple transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-primary-purple transition"><FaDribbble /></a>
        </div>

        {/* Hak Cipta */}
        <p className="text-sm text-gray-500 mb-2">Didesain dan dikodekan dengan ❤️ oleh Qiyu.</p>
        <p className="text-sm text-gray-500">&copy; {currentYear} MyProfile. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;