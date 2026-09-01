import { useEffect, useState } from 'react';
import MagazineCover from '../components/MagazineCover';
import StoryIndex from '../components/StoryIndex';
import StorySection from '../components/StorySection';
import EditorialProject from '../components/EditorialProject';
import HowIThink from '../components/HowIThink';
import SkillCanvas from '../components/SkillCanvas';
import JourneyStrip from '../components/JourneyStrip';
import AchievementSpread from '../components/AchievementSpread';
import CurrentlySection from '../components/CurrentlySection';
import PlaygroundGallery from '../components/PlaygroundGallery';
import ResumeDocument from '../components/ResumeDocument';
import ContactStory from '../components/ContactStory';
import CustomCursor from '../components/CustomCursor';

import {
  getProfile,
  getProjects,
  getSkills,
  getExperience,
  getEducation,
  getAchievements,
  getCertifications,
  getPlayground
} from '../services/api';

export default function Home() {
  const [coverOpen, setCoverOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [playgroundItems, setPlaygroundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [profData, projData, skillData, expData, eduData, achData, certData, playData] = await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperience(),
          getEducation(),
          getAchievements(),
          getCertifications(),
          getPlayground()
        ]);

        setProfile(profData);
        setProjects(projData);
        setSkills(skillData);
        setExperiences(expData);
        setEducation(eduData);
        setAchievements(achData);
        setCertifications(certData);
        setPlaygroundItems(playData);
      } catch (err) {
        console.error('Failed to load portfolio database content:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-ivory)',
        fontFamily: 'var(--font-editorial)'
      }}>
        <h2 style={{ fontSize: '32px', fontStyle: 'italic', color: 'var(--color-forest)', animation: 'pulse 1.5s infinite' }}>
          LOADING EDITION...
        </h2>
        <style>{`
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      
      {!coverOpen && (
        <MagazineCover onOpen={() => setCoverOpen(true)} />
      )}

      {coverOpen && (
        <div style={{ animation: 'fadeIn 1s ease' }}>
          <div className="scroll-progress" id="progressBar" />
          
          <StoryIndex onNavigate={handleNavigate} />
          
          <StorySection profile={profile} />
          
          <EditorialProject projects={projects} />
          
          <HowIThink />
          
          <SkillCanvas skills={skills} />
          
          <JourneyStrip experiences={experiences} />
          
          <AchievementSpread achievements={achievements} certifications={certifications} />
          
          <CurrentlySection profile={profile} />
          
          <PlaygroundGallery items={playgroundItems} />
          
          <ResumeDocument
            profile={profile}
            education={education}
            experiences={experiences}
            achievements={achievements}
            skills={skills}
          />
          
          <ContactStory />
        </div>
      )}
    </>
  );
}
