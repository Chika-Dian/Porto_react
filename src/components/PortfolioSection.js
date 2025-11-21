import React, { useState } from 'react';
import { FaDribbble } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import { IoEyeOutline } from 'react-icons/io5';

import { portfolioDataByCategory, categories } from '../data/portfolioData';
import Stack from "./Stack"; // 🟣 penting!

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState({});

  const filteredProjects = portfolioDataByCategory[activeCategory] || [];

  const handleNext = (id, total) => {
    setCurrentIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % total
    }));
  };

  const handlePrev = (id, total) => {
    setCurrentIndex(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === 0 ? total - 1 : (prev[id] - 1)
    }));
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Portfolio
        </h2>

        {/* CATEGORY BUTTON */}
        <div className="flex justify-center space-x-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:scale-[1.02] border border-gray-100 group flex flex-col"
            >

              {/* ############
                  GRAPHICS MODE
                 ############ */}
              {activeCategory === "Graphics" && project.stackImages ? (
                <div className="relative h-60 w-full flex items-center justify-center p-4">
                  <Stack 
                    cardsData={project.stackImages.map((img, index) => ({
                      id: index + 1,
                      img: img
                    }))}
                  />

                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow-md bg-purple-100 text-purple-700">
                    {project.label}
                  </span>
                </div>
              ) : (
              <>
                {/* OTHER CATEGORY CAROUSEL */}
                <div className="relative h-60 w-full overflow-hidden">

                  {project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-full">

                      {(() => {
                        const slide = project.images[currentIndex[project.id] || 0];

                        if (typeof slide === "string") {
                          return (
                            <img 
                              src={slide}
                              className="w-full h-full object-cover transition-all duration-300"
                              alt={project.title}
                            />
                          );
                        }

                        if (slide.type === "spline") {
                          return <Spline scene={slide.url} />;
                        }

                        return null;
                      })()}

                      <button 
                        onClick={() => handlePrev(project.id, project.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                        ‹
                      </button>

                      <button 
                        onClick={() => handleNext(project.id, project.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                        ›
                      </button>
                    </div>

                  ) : project.spline ? (
                    <Spline scene={project.spline} />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  <span className={`
                    absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow-md 
                    ${project.label === 'Mobile App' ? 'bg-indigo-100 text-indigo-700' : 
                      project.label === 'Dashboard' ? 'bg-red-100 text-red-700' : 
                      'bg-green-100 text-green-700'}
                  `}>
                    {project.label}
                  </span>

                </div>
              </>
              )}

              {/* TEXT BELOW */}
              <div className="p-5 text-left flex flex-col justify-between min-h-[150px] gap-4">
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 font-medium mb-4 max-h-20 overflow-y-auto pr-2 pb-2">
                    {project.tags}
                  </p>
                </div>

                <a 
                  href={project.detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800 transition duration-300 mt-auto"
                >
                  Lihat Detail
                  <IoEyeOutline className="ml-1 w-4 h-4" />
                </a>
              </div>

            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="md:col-span-3 py-10 text-center text-gray-500">
              <p>Tidak ada proyek di kategori <strong>{activeCategory}</strong>.</p>
            </div>
          )}

        </div>

        {/* BUTTON DRIBBBLE */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl flex items-center gap-2 text-lg font-medium shadow-md hover:opacity-90 transition">
            <FaDribbble className="w-5 h-5" />
            <span>More on Dribbble</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default PortfolioSection;
