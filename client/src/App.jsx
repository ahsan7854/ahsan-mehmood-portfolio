import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Editable Data Store
import {
  profile as localProfile,
  services as localServices,
  skills as localSkills,
  projects as localProjects,
  experiences as localExperiences,
} from './data';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [profile, setProfile] = useState(localProfile);
  const [services, setServices] = useState(localServices);
  const [skills, setSkills] = useState(localSkills);
  const [projects, setProjects] = useState(localProjects);
  const [experiences, setExperiences] = useState(localExperiences);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Optional: Sync with Backend API if MySQL server is active with data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profRes, servRes, skillRes, projRes, expRes] = await Promise.all([
          fetch('http://localhost:5000/api/profile'),
          fetch('http://localhost:5000/api/services'),
          fetch('http://localhost:5000/api/skills'),
          fetch('http://localhost:5000/api/projects'),
          fetch('http://localhost:5000/api/experience'),
        ]);

        if (profRes.ok) {
          const pData = await profRes.json();
          if (pData && pData.name) setProfile(pData);
        }
        if (servRes.ok) {
          const sData = await servRes.json();
          if (Array.isArray(sData) && sData.length > 0) setServices(sData);
        }
        if (skillRes.ok) {
          const kData = await skillRes.json();
          if (Array.isArray(kData) && kData.length > 0) setSkills(kData);
        }
        if (projRes.ok) {
          const prData = await projRes.json();
          if (Array.isArray(prData) && prData.length > 0) setProjects(prData);
        }
        if (expRes.ok) {
          const eData = await expRes.json();
          if (Array.isArray(eData) && eData.length > 0) setExperiences(eData);
        }
      } catch (err) {
        // Backend offline or local mode: local data remains active
      }
    };

    fetchData();
  }, []);

  return (
    <div className="portfolio-app" id="top">
      <Navbar currentTheme={theme} setTheme={setTheme} />
      <Hero profile={profile} />
      <Services services={services} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}
