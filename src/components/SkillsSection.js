import React from 'react';
import figma from '../assets/icons/Figma.png';
import blender from '../assets/icons/blender.png';
import Canva from '../assets/icons/canva.png';
import react from '../assets/icons/react.png';
import Trello from '../assets/icons/Trello.png';
import reactbits from '../assets/icons/react_bits.png';
import Tailwind from '../assets/icons/tailwind_css.png';
import Notion from '../assets/icons/Notion.png';
import Ibis from '../assets/icons/ibispaint.png';

const toolsData = [
    { name: "Figma", category: "UI Design", iconSrc: figma }, 

    { name: "Canva", category: "Digital Imaging", iconSrc: Canva },
    
    { name: "Blender", category: "3D Design", iconSrc: blender },
    
    { name: "React", category: "Frontend Framework", iconSrc: react },

    { name: "React.bits", category: "UI Component Library", iconSrc: reactbits },

    { name: "Tailwind", category: "Styling Framework", iconSrc: Tailwind },

    { name: "Trello", category: "Project Management", iconSrc: Trello },

    { name: "Notion", category: "Project Management", iconSrc: Notion },

    { name: "Ibis Paint", category: "Digital Illustration", iconSrc: Ibis },

   
];

const ToolCard = ({ name, category, iconSrc }) => (
    
    <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 transition duration-200 hover:bg-gray-100 border border-gray-100 shadow-sm">
        
        {
            
        }
        <div className="w-10 h-10 flex-shrink-0">
            {

            }
            <img 
                src={iconSrc} 
                alt={`${name} icon`} 
                className="w-full h-full object-contain rounded-md" 
            />
        </div>
        
        {/* Teks Alat */}
        <div className="text-left">
            <h3 className="text-base font-semibold text-gray-800">{name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{category}</p>
        </div>
    </div>
);


function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                
                {/* Judul diubah agar lebih sesuai */}
                <h2 className="text-4xl font-extrabold text-heading-dark mb-16">
                    Tools I Use
                </h2>

                {/*  */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {toolsData.map((tool, index) => (
                        <ToolCard 
                            key={index}
                            name={tool.name}
                            category={tool.category}
                            iconSrc={tool.iconSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;