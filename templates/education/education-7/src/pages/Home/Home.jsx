/**
 * Home — Landing page combining all sections.
 */
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/sections/Hero/Hero';
import StatsBar from '../../components/sections/StatsBar/StatsBar';
import CourseSearch from '../../components/sections/CourseSearch/CourseSearch';
import CategoryGrid from '../../components/sections/CategoryGrid/CategoryGrid';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import {
  heroSlides, heroPanels, statsData,
  courseFilterOptions, categories, testimonials,
} from '../../data/content';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = ({ query, category }) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (category) params.set('cat', category);
    navigate(`/courses?${params.toString()}`);
  };

  return (
    <main id="main-content">
      <Hero slides={heroSlides} heroPanels={heroPanels} />
      <StatsBar stats={statsData} />
      <CourseSearch
        filterOptions={courseFilterOptions}
        categories={categories}
        onSearch={handleSearch}
      />
      <CategoryGrid categories={categories} />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default Home;
