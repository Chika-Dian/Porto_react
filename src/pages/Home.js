import React, { Suspense } from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Lanyard from '../components/Lanyard';

function Home() {
    const LANYARD_HEIGHT = '1000px';
    const LANYARD_WIDTH = '600px';
    const TOP_OFFSET = '0px';

    return (
        <main className="relative">

            {/* 3D Lanyard */}
            <div
                className="absolute right-16 z-0 hidden lg:block"
                style={{
                    top: TOP_OFFSET,
                    width: LANYARD_WIDTH,
                    height: LANYARD_HEIGHT
                }}
            >
                <Suspense fallback={<div className="absolute inset-0 bg-black flex justify-center items-center text-white text-xl">Loading 3D...</div>}>
                    <Lanyard />
                </Suspense>
            </div>

            {/* Konten utama */}
            <ProfileCard />
            <AboutSection />
            <SkillsSection />
            <WorkExperienceSection />
            <PortfolioSection />
            <ContactSection />
        </main>
    );
}

export default Home;
