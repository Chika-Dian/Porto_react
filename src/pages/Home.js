// src/pages/Home.jsx

import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Lanyard from '../components/Lanyard'; 
import Navbar from '../components/Navbar'; 


function Home() {
    // Tinggi dan lebar disesuaikan untuk tampilan di latar belakang
    const LANYARD_HEIGHT = '1000px'; 
    const LANYARD_WIDTH = '600px';
    const TOP_OFFSET = '0px';      

    return (
        <main className="relative"> 
            
            {/* 1. Navbar (Anda bisa mengaktifkannya jika diperlukan) */}
            {/* <Navbar /> */}

            {/* 2. LANYARD 3D: Diposisikan ABSOLUT di latar belakang (z-0) */}
            {/* 🛑 MODIFIKASI: Menambahkan 'hidden lg:block' 
                 Ini menyembunyikannya secara default (mobile) dan menampilkannya hanya di layar besar (lg ke atas) */}
            <div 
                className="absolute right-16 z-0 pointer-events-none hidden lg:block"
                style={{ 
                    top: TOP_OFFSET, 
                    width: LANYARD_WIDTH, 
                    height: LANYARD_HEIGHT 
                }} 
            >
                <Lanyard />
            </div>

            {/* 3. Konten Utama Halaman (ProfileCard dan section lainnya) */}
            {/* Konten ini akan selalu berada di atas dan terlihat di semua ukuran layar */}
            <ProfileCard /> 
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection /> 
        </main>
    );
}

export default Home;