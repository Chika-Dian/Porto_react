// src/components/ContactSection.js
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function ContactSection() {
  // Kontak Personku
  const email = "chikhancyani@gmail.com";
  const phone = "083842729943";

  // Media Sosialku
  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/d_ianchika/" },
    { icon: FaGithub, href: "https://github.com/Chika-Dian" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/chika-dian-nurcahyani" },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
      {/*  */}
      <div className="absolute inset-0 bg-indigo-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
          
          {/*  */}
          <div className="text-center lg:text-left max-w-lg pt-12 lg:pt-0">
            <h2 className="text-4xl font-extrabold text-heading-dark mb-6">
              Contact Me
            </h2>
            <p className="text-lg text-text-gray mb-12">
              Interested in working together? Let’s talk about your project and make something amazing!
            </p>

            {/*  */}
            <div className="space-y-4 mb-8">
              <p className="flex items-center justify-center lg:justify-start text-primary-purple text-lg font-medium">
                <FaEnvelope className="mr-3" />
                <a
                  href={`mailto:${email}`}
                  className="hover:opacity-80 transition"
                >
                  {email}
                </a>
              </p>
              <p className="flex items-center justify-center lg:justify-start text-primary-purple text-lg font-medium">
                <FaPhoneAlt className="mr-3" />
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:opacity-80 transition"
                >
                  {phone}
                </a>
              </p>
            </div>

            {/* Media Sosial */}
            <div className="flex justify-center lg:justify-start space-x-6 text-2xl text-text-gray">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-purple transition"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>

          {/*Formulir kontak */}
          <div className="w-full max-w-md bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-purple focus:outline-none placeholder-text-gray/70"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@email.com"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-purple focus:outline-none placeholder-text-gray/70"
                />
              </div>

              {/* Pesan */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-purple focus:outline-none resize-y placeholder-text-gray/70"
                ></textarea>
              </div>

              {/* Tombol */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-150 transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
