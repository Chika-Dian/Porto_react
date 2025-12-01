import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react'; 
import YRI from '../assets/sertifikat/YRI.jpg';
import FYP from '../assets/sertifikat/FYP.png'; 
import IDEAL from '../assets/sertifikat/ideal.png'; 
import ideal from '../assets/sertifikat/ideal1.png'; 
import gilar from '../assets/sertifikat/gilar.png'; 
import gilar1 from '../assets/sertifikat/gilar1.png';


// --- Data Pengalaman Kerja ---
const workExperiences = [

    {
        title: "Web Development & UI/UX Design",
        company: "Celerates (Batch 3)",
        duration: "Sep 2025 - Des 2025",
        details: {
            description: "Mengikuti program intensif (bootcamp) yang mencakup pengembangan web (front-end) dan perancangan antarmuka pengguna (UI/UX) secara mendalam.",
            skills: ["Web Development", "UI/UX Design", "React", "Tailwind CSS", "Figma"],
            certificate: "Sertifikat Kelulusan Celerates Batch 3",
            certificateTitle: null, 
            location: null,
        },
    },

    {
        title: "Staff Creative Economy",
        company: "BEM FT UNESA",
        duration: "Feb 2025 - Saat ini",
        details: {
            description: "FUNGSIONARIS BEM FT UNESA 2025. Terlibat dalam pengembangan inisiatif ekonomi kreatif.",
            skills: ["Teamwork", "Manajemen Acara"],
            certificate: null,
            certificateTitle: null, 
            location: null,
        },
    },
    {
        title: "Graphic Designer",
        company: "GILAR ENTERPRISE (Magang)",
        duration: "Jun 2024 - Jan 2025 (8 bln)",
        details: {
            description: [
                "Created visual content for G-Team, focusing on event-related materials such as posters, reports, and event documentation.",
                "Designed monthly meeting presentation decks and certificates.",
                "Assisted the social media team with graphic needs when required.",
                "Gained valuable experience in remote collaboration, event branding, and content production under a dynamic organizational structure.",
            ],
            skills: ["Graphic Design", "Time Management", "Event Planning", "Remote Collaboration"],
            certificate: gilar,
            certificateTitle: gilar1,
            location: "Jarak jauh",
        },
    },
    {
        title: "Graphic Designer",
        company: "FYP MEDIA CORP",
        duration: "Mei 2024 - Jan 2025 (9 bln)",
        details: {
            description: [
                "Designed social media content and collaborated on visual projects to support digital campaigns.",
                "Worked closely with the creative team to produce engaging promotional materials aligned with brand identity.",
                "Strengthened skills in visual communication, layout design, and team collaboration.",
                "Gained hands-on experience in content creation and creative strategy across multiple platforms.",
            ],
            skills: ["Time Management", "Communication", "Visual Communication", "Creative Strategy"],
            certificate: FYP, 
            certificateTitle: "Sertifikat Graphic Designer FYP Media Corp", 
            location: null,
        },
    },
    {
        title: "Multimedia and Design",
        company: "Youth Ranger Indonesia (YRI Surabaya)",
        duration: "Jan 2024 - Jan 2025 (1 thn 1 bln)",
        details: {
            description: [
                "Created visual content and event documentation designs for community activities.",
                "Designed layouts for event publications, including posters, social media posts, and recap visuals.",
                "Contributed to multimedia content creation for internal and external communication.",
                "Strengthened skills in layout composition, creative storytelling, and event branding under tight deadlines.",
            ],
            skills: ["Multimedia Designer", "Graphic Design", "Creative Storytelling", "Project Management"],
            certificate: YRI, 
            certificateTitle: "Sertifikat Multimedia Designer at YRI Surabaya", 
            location: null,
        },
    },
    {
        title: "Desainer Grafis",
        company: "IDEAL Indonesia (Magang)",
        duration: "Sep 2024 - Des 2024 (4 bln)",
        details: {
            description: [
                "Created posts, stories, and reels to strengthen brand identity.",
                "Designed event-related graphics to support marketing efforts.",
                "Contributed to content planning and collaborated with the team to ensure timely, high-quality design results.",
                "Gained hands-on experience in visual storytelling and digital branding for social media platforms.",
            ],
            skills: ["Graphic Design", "Visual Storytelling", "Digital Branding"],
            certificate: IDEAL, 
            certificateTitle: ideal, 
            location: "Jarak jauh",
        },
    },
    
];

// ---------------------------------------------------

const WorkExperienceItem = ({ title, company, duration, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const formatDescription = (desc) => {
        if (Array.isArray(desc)) {
            return (
                <ul className="list-disc pl-5 space-y-1 mt-2">
                    {desc.map((line, i) => (
                        <li key={i} className="text-gray-700">{line}</li>
                    ))}
                </ul>
            );
        }
        return <p className="text-gray-700 mt-2">{desc}</p>;
    };

    // 
    const isImageCertificate = details.certificate && 
        (details.certificate === YRI || 
         details.certificate === FYP || 
         details.certificate === IDEAL||
        details.certificate === gilar);
    
    // 
    const isCertificateTitleImage = details.certificateTitle && 
    (details.certificateTitle === ideal ||
        details.certificateTitle === gilar1
    );
    
    // 
   const isCertificateTitleText = details.certificateTitle && 
                                   typeof details.certificateTitle === 'string' &&
                                   (details.certificateTitle !== ideal && 
                                    details.certificateTitle !== gilar1 
                                   );


    return (
        <div className="border-b last:border-b-0 py-4 transition-all duration-300">
            {/* Header Item */}
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
                <div className="flex items-start space-x-4">
                    {/* Placeholder Icon */}
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Briefcase className="w-5 h-5 text-indigo-600" />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                        <p className="text-gray-700 text-sm">
                            {company} • {duration} {details.location && <span className="text-xs text-gray-500 ml-1">({details.location})</span>}
                        </p>
                    </div>
                </div>

                {/* */}
                <button className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
            </div>

            {/*  */}
            {isOpen && (
                <div className="mt-4 pl-14 pr-4 pb-2"> 
                    
                    {/* */}
                    <div className="mb-4">
                        <h4 className="font-semibold text-md text-gray-800 border-b pb-1">Tanggung Jawab:</h4>
                        {formatDescription(details.description)}
                    </div>
                    
                    {/*  */}
                    <div className="grid md:grid-cols-2 gap-4">
                        
                        {/* Kolom 1: Sertifikat/Bukti */}
                        {details.certificate && (
                            
                            <div className="p-3 border rounded-lg bg-gray-50 h-full md:col-span-2"> 
                                <h4 className="font-semibold text-sm text-gray-700 border-b pb-1 mb-2">Sertifikat/Bukti:</h4>

                                {isImageCertificate ? (
                                    
                                    <>
                                    {/**/}
                                    {isCertificateTitleText && (
                                        <p className="text-indigo-600 italic text-sm mb-2">
                                            {details.certificateTitle}
                                        </p>
                                    )}

                                    <div className="flex space-x-4 items-center overflow-x-auto pb-2"> 
                                        {/*  */}
                                        <div className="flex-shrink-0 w-52 h-32 rounded-lg overflow-hidden shadow-md border-2 border-indigo-200">
                                            <img
                                                src={details.certificate} 
                                                alt={`Sertifikat ${title} - ${company}`}
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        
                                        {/* TAMPILAN GAMBAR KEDUAc */}
                                        {isCertificateTitleImage ? (
                                            
                                            <div className="flex-shrink-0 w-52 h-32 rounded-lg overflow-hidden shadow-md border-2 border-indigo-200">
                                                <img
                                                    src={details.certificateTitle} 
                                                    alt={`Sertifikat Kedua ${title} - ${company}`}
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        ) : (
                                            // 
                                            <div className="flex-shrink-0 w-52 h-32 bg-white rounded-lg border border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                                                <span className='italic'>Placeholder Visual</span>
                                            </div>
                                        )}
                                    </div>
                                    </>
                                ) : (
                                    //
                                    <p className="text-indigo-600 italic text-sm">{details.certificate}</p>
                                )}
                            </div>
                        )}
                        
                        {/*  */}
                        {details.skills && details.skills.length > 0 && (
                            
                            <div className="p-3 border rounded-lg bg-gray-50 h-full md:col-start-1 md:col-span-2"> 
                                <h4 className="font-semibold text-sm text-gray-700 border-b pb-1 mb-2">Keahlian Terkait:</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {details.skills.map((skill, i) => (
                                        <span key={i} className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div> {/* Penutup grid */}

                </div>
            )}
        </div>
    );
};


// ----------------------------------------------------------------------------------------------------------------------

function WorkExperienceSection() {
    return (
        <section id="workexperience" className="container mx-auto max-w-4xl px-4 py-16 z-10 relative"> 
            <h2 className="text-3xl font-bold mb-8 text-gray-900">💼 Work Experience</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"> 
                {workExperiences.map((item, index) => (
                    <WorkExperienceItem key={`${item.company}-${index}`} {...item} /> 
                ))}
            </div>
        </section>
    );
}

export default WorkExperienceSection;