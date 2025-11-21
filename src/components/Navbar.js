import React, { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const gradientClass = "bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600";

  return (
    <header className="px-6 md:px-12 py-4 shadow-sm backdrop-blur-sm sticky top-0 z-10 bg-white/90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl text-heading-dark">MyProfile</div>
        
        {/* Tombol menu mobile */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>

        {/* Navigasi desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-text-gray hover:text-primary-purple transition duration-150"
            >
              {item}
            </a>
          ))}
          <button 
            className={`${gradientClass} text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-pink-500/50 flex items-center space-x-2 transform hover:scale-[1.02]`}
          >
            <Send className="w-5 h-5"/> 
            <span>Hire Me</span>
          </button>
        </nav>
      </div>

      {/*  */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white p-4 rounded-lg shadow-lg">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block text-gray-700 font-medium hover:text-violet-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className={`${gradientClass} w-full text-white px-5 py-2 rounded-lg font-medium flex items-center justify-center space-x-2`}
          >
            <Send className="w-5 h-5"/> 
            <span>Hire Me</span>
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
